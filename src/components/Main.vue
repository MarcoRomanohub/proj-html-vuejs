<script>
import { store } from '../data/store'
import jumbotron from './partials/jumbotron.vue'
export default {
  components:{
    jumbotron
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <main>
    <jumbotron />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 110px;
  height: 2000px;
}
</style>
