<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
    ></app-car>
  </div>
</template>

  <script>
    import Car from './Car.vue'/*локальний імпорт компоненту*/

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
  components: {/*локальний імпорт компоненту*/
    appCar: Car/*локальний імпорт компоненту*/
  }/*локальний імпорт компоненту*/
}
</script>

<style>

</style>
