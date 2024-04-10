<script>
import { store } from '../data/store'
import courses from './partials/courses.vue'
import jumbotron from './partials/jumbotron.vue'
export default {
  components:{
    jumbotron,
    courses
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
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 110px;
  height: 2000px;
}
</style>
