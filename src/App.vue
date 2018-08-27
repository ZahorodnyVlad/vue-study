<template>
  <div>

    <select v-model="defaultSocial">
      <option v-for="s in socialList" :selected="s === defaultSocial">{{ s }}</option>
    </select>

    <hr>


  </div>
</template>

  <script>


export default {
  data() {
    return {
      defaultSocial: 'fb',
      socialList: ['ins', 'li', 'fb']
    }
  },
}
</script>

<style scoped>



</style>
