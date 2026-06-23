import type { ComputedRef, Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { inBrowser } from 'vitepress/client'
import { ref, watch } from 'vue'

/**
 * Repository license information.
 *
 * 仓库许可证信息。
 */
interface RepoLicense {
  /** License name / 许可证名称 */
  name: string
  /** License URL / 许可证链接 */
  url: string
}

/**
 * Repository information returned by the GitHub/Gitee API.
 *
 * 由 GitHub/Gitee API 返回的仓库信息。
 */
export interface RepoInfo {
  /** Repository name / 仓库名称 */
  name: string
  /** Full repository name (owner/repo) / 仓库完整名称（所有者/仓库） */
  fullName: string
  /** Repository description / 仓库描述 */
  description: string
  /** Repository URL / 仓库链接 */
  url: string
  /** Total star count / 总 star 数 */
  stars: number
  /** Total fork count / 总 fork 数 */
  forks: number
  /** Formatted star count for display (e.g. "1.2k") / 格式化后的 star 数（如 "1.2k"） */
  convertStars: number | string
  /** Formatted fork count for display (e.g. "1.2k") / 格式化后的 fork 数（如 "1.2k"） */
  convertForks: number | string
  /** Watcher count / 关注者数量 */
  watchers: number
  /** Primary programming language / 主要编程语言 */
  language: string
  /** Color code for the primary language / 主要语言的颜色代码 */
  languageColor: string
  /** Whether the repository is archived / 仓库是否已归档 */
  archived: boolean
  /** Repository visibility / 仓库可见性 */
  visibility: 'Private' | 'Public'
  /** Whether this is a template repository / 是否为模板仓库 */
  template: boolean
  /** Owner type / 所有者类型 */
  ownerType: 'User' | 'Organization'
  /** License information, or null if none / 许可证信息，无则为 null */
  license: RepoLicense | null
}

/**
 * Local cache for repository data, stored in localStorage.
 *
 * Since GitHub/Gitee API rate limits are restrictive and Vercel free tier quotas are
 * limited, repository data is cached locally. The default cache duration is 24 hours.
 *
 * 仓库数据的本地缓存，存储在 localStorage 中。由于 GitHub/Gitee API 请求频率限制严格且
 * Vercel 免费额度有限，因此将仓库数据缓存到本地。默认缓存时间为 24 小时。
 */
const storage = useLocalStorage('__VITEPRESS_REPO_CACHE__', {} as Record<string, {
  info: RepoInfo
  updatedAt: number
}>)

/**
 * Return type for the `useRepo` composable.
 *
 * `useRepo` 组合式函数的返回类型。
 */
interface UseRepoResult {
  /** Repository data, or null if not yet loaded / 仓库数据，未加载时为 null */
  data: Ref<RepoInfo | null>
  /** Whether data has been loaded (regardless of success/failure) / 数据是否已加载（无论成功或失败） */
  loaded: Ref<boolean>
}

/**
 * Fetch repository information from GitHub or Gitee, with localStorage caching.
 *
 * Automatically watches the `repo` and `register` parameters and re-fetches when they
 * change. Cached data is valid for 24 hours. Only executes in the browser environment.
 *
 * 从 GitHub 或 Gitee 获取仓库信息，并支持 localStorage 缓存。自动监听 `repo` 和
 * `register` 参数变化并重新获取。缓存数据有效期为 24 小时。仅在浏览器环境中执行。
 *
 * @param repo - Repository identifier in "owner/name" format / 仓库标识，格式为 "所有者/名称"
 * @param register - Repository platform: `'github'` or `'gitee'` / 仓库平台：`'github'` 或 `'gitee'`
 * @returns Reactive references to repository data and loading state / 仓库数据和加载状态的响应式引用
 * @example
 * // Basic usage
 * const { data, loaded } = useRepo(
 *   computed(() => 'vuejs/vitepress'),
 *   computed(() => 'github'),
 * )
 */
export function useRepo(
  repo: ComputedRef<string>,
  register: ComputedRef<'github' | 'gitee'>,
): UseRepoResult {
  const data = ref<RepoInfo | null>(null)
  const loaded = ref(false)

  async function fetchData() {
    const [owner, name] = repo.value.split('/')
    if (!inBrowser || !owner || !name)
      return

    const key = `${register.value}:${owner}/${name}`
    const cached = storage.value[key]
    if (cached?.info?.name && Date.now() - cached.updatedAt <= 86400000) {
      data.value = cached.info
      loaded.value = true
      return
    }

    loaded.value = false
    try {
      const res = await request(register.value, owner, name)
      loaded.value = true

      res.convertStars = convertThousand(res.stars)
      res.convertForks = convertThousand(res.forks)

      data.value = res

      storage.value[key] = {
        info: res,
        updatedAt: Date.now(),
      }
    }
    catch (e) {
      loaded.value = true
      console.error(e)
    }
  }

  if (inBrowser)
    watch([repo, register], fetchData, { immediate: true })

  return { data, loaded }
}

/**
 * Convert a number to a human-readable "k" format (e.g. 1234 → "1.2k").
 *
 * 将数字转换为人类可读的 "k" 格式（如 1234 → "1.2k"）。
 *
 * @param num - The number to convert / 要转换的数字
 * @returns The formatted string if >= 1000, otherwise the original number /
 *   如果 >= 1000 则返回格式化字符串，否则返回原始数字
 */
function convertThousand(num: number): number | string {
  if (num < 1000)
    return num
  return `${(num / 1000).toFixed(1)}k`
}

/**
 * Send a request to the repository API proxy to fetch repo info.
 *
 * 向仓库 API 代理发送请求以获取仓库信息。
 *
 * @param register - Repository platform: `'github'` or `'gitee'` / 仓库平台：`'github'` 或 `'gitee'`
 * @param owner - Repository owner / 仓库所有者
 * @param name - Repository name / 仓库名称
 * @returns Parsed repository information / 解析后的仓库信息
 * @throws Will throw if the HTTP response is not ok / 如果 HTTP 响应不成功则抛出异常
 */
async function request(register: string, owner: string, name: string): Promise<RepoInfo> {
  const url = `https://api.pengzhanbo.cn/${register}/repo/${owner}/${name}`
  const res = await fetch(url)
  if (!res.ok)
    throw new Error(`fetch ${owner}/${name} from ${register} error: ${res.statusText} ${res.status}`)
  return await res.json() as RepoInfo
}
