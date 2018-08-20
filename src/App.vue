<template>
  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>
  </div>
</template>

  <script>
    import Car from './Car.vue'/*локальний імпорт компоненту*/

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {/*локальний імпорт компоненту*/
    appCar: Car/*локальний імпорт компоненту*/
  }/*локальний імпорт компоненту*/
}
</script>

<style>

</style>
