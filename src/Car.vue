<template>

<div class="car">

  <h1>Name: {{ carName }}</h1>
  <p>Year: {{ carYear }}</p>

</div>

</template>

<script>

  export default {
    data(){
      return {
        carName: 'ford',
        carYear: 2015
      }
    }
  }

</script>

<style>

  .car{
    border: 1px solid black;
  }

</style>
