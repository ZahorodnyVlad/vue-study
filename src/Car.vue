<template>

<div class="car">

  <h1>Name: {{ carName }}</h1>
  <p>Year: {{ carYear }}</p>
  <button @click="changeName">Change name</button>
  <button @click="changeFunc">Change name2</button>

</div>

</template>

<script>

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
