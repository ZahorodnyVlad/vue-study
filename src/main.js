import Vue from 'vue'
import App from './App.vue'
/*import Car from './Car.vue'

Vue.component('app-car', Car)*/ /*реєстрація компоненту глобально*/

new Vue({
  el: '#app',
  render: function(h){
    return h(App)
  }
})
