import { ENUMBODY_TYPES } from '@babel/types'
import { createI18n } from 'vue-i18n'

import CN from './zh-CN'
import ENG from './en-EN'

// 语言库
const messages = {
  'CN': CN,
  'ENG': ENG
}

// 默认语言
// const langDefault = 'zh-CN'
const langDefault = 'ENG'

const i18n = createI18n({
  legacy: false,
  locale: langDefault,		//默认显示的语言 
  messages:{
    CN,
    ENG
  }
})

export default i18n; // 将i18n暴露出去，在main.js中引入挂载
