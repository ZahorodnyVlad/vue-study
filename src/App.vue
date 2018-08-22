<template>
  <div>

      <h2 v-colored:background="'red'">{{ title }}</h2>
      <h2 v-colored:color="'blue'">{{ title }}</h2>

    <button v-on:click></button>

  </div>
</template>

  <script>

export default {
  data() {
    return {
      title: 'Hello!'
    }
  }
}
</script>

<style scoped>
  


</style>
