<template>
  <h1>Counter: {{ counter }}</h1>
</template>

<script>
  import {eventEmitter} from './main'

  export default {
    data() {
      return {
        counter: 2
      }
    },
    created() {
      eventEmitter.$on('counterUpdated', function() {

        this.counter++
      })
    }
  }


</script>