import type { Plugin } from 'vitepress'
import { omit } from '@pengzhanbo/utils'

interface Icon {
  name: string
  svg: string
  classname?: string
}

type ResolvedIcon = Omit<Icon, 'classname'> & { classname: Set<string> }

const name = 'vitepress:tuck-icons'
const iconList: ResolvedIcon[] = []
let isProcessing = false

function iconPlugin(icons: Icon[]): Plugin {
  for (const icon of icons) {
    const index = iconList.findIndex(item => item.name === icon.name)
    if (index === -1) {
      iconList.push({ ...omit(icon, ['classname']), classname: new Set([icon.classname || icon.name]) })
    }
    else {
      icon.classname && iconList[index].classname.add(icon.classname)
    }
  }

  const moduleId = 'virtual:tuck-icons.css'
  const resolveId = `\0${moduleId}`
  return {
    name,
    enforce: 'post',

    resolveId(id) {
      if (id === moduleId) {
        isProcessing = true
        return resolveId
      }
    },
    load(id) {
      if (id !== resolveId)
        return null

      if (!isProcessing)
        return null

      let css = ''
      for (const icon of iconList) {
        const classname = Array.from(icon.classname)
          .map(name => `.vpi-${name}`)
          .join(',\n')
        css += `${classname} {\n  --icon: ${icon.svg};\n}\n`
      }
      isProcessing = false
      return css
    },
  }
}

export { iconPlugin }
