import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)


// 集成ElementPlus
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/theme-chalk/index.css';
import './style/container.css'
import axios from 'axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { Icon } from 'element-ui';

import VueI18n from 'vue-i18n'
import i18n from './lang'
app.use(i18n);
// app.use(VueI18n)
app.use(ElementPlus, {locale});
app.use(store).use(router).mount("#app");
app.config.globalProperties.$http = axios
// app.use(Icon);
app.use(ElementPlusIconsVue)
