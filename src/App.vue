<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-counter></app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event"
    ></app-car>
  </div>
</template>

  <script>
    import Car from './Car.vue'/*локальний імпорт компоненту*/
    import Counter from './Counter.vue'/*локальний імпорт компоненту*/

export default {
  data () {
    return {
      carName:'ford',
      carYear: 2011
    }
  },
  methods: {
    changeNameToAudi(){
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
