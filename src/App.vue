<template>
  <div>

    <app-counter></app-counter>

    <app-car></app-car>
  </div>
</template>

  <script>
    import Car from './Car.vue'/*локальний імпорт компоненту*/
    import Counter from './Counter.vue'/*локальний імпорт компоненту*/

export default {
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
