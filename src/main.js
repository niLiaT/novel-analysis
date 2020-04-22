import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import VueApexCharts from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts)

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
})