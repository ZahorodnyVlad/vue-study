import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color'


Vue.directive('colored', ColorDirective)
// Vue.component('app-car', Car)*/ /*реєстрація компоненту глобально*/


new Vue({
  el: '#app',
  render: function(h){
    return h(App)
  }
})
