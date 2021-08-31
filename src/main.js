/*
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-07-06 09:53:29
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-07-06 13:45:17
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$version = 'v1'
app.provide('user', 'administrator')
app.mount('#app')