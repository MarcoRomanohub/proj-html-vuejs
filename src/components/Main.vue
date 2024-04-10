<script>
import { store } from '../data/store'
import courses from './partials/courses.vue'
import jumbotron from './partials/jumbotron.vue'
import uniYear from './partials/uniYear.vue'
export default {
  components:{
    jumbotron,
    courses,
    uniYear
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
    <courses />
    <uniYear />
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 110px;
  height: 8000px;
}
</style>
