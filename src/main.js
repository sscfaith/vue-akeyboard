import Vue from 'vue'
import App from './App.vue'

import VueAkeyboard from '../packages'
Vue.use(VueAkeyboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
