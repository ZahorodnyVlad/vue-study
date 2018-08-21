<template>

<div class="car">

  <h1>Name: {{ carName }}</h1>
  <p>Year: {{ carYear }}</p>
  <button @click="changeName">Change name</button>
  <button @click="changeFunc()">Change name2</button>
  <button @click="updateCounter">Update counter</button>

</div>

</template>

<script>

  import {eventEmitter} from './main'

  export default {
    // props: ['carName', 'carYear'],
    // props: {
    //   carName: String,
    //   carYear: Number
    // },
    props: {
      carName: {
        type: String,
        default: 'default name'
      },
      carYear: Number,
      changeFunc: Function
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      },
      updateCounter() {
//        this.$emit('counterUpdated', this.counter + 1)

        eventEmitter.$emit('counterUpdated')

      }
    }
  }

</script>

<style>

  .car{
    border: 1px solid black;
  }

  .car h3 {
    margin: 5px;
  }

</style>
