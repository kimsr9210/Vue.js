import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome CSS 추가

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
