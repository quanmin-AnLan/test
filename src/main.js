import Vue from 'vue'

import App from './App.vue'

// 注册全局组件
import overall from "./components/config"
overall(Vue)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
