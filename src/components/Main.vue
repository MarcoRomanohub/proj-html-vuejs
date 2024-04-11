<script>
import { store } from '../data/store'
import courses from './partials/courses.vue'
import latestCourses from './partials/latestCourses.vue'
import partners from './partials/partners.vue'
import uniYear from './partials/uniYear.vue'
export default {
  components:{
    courses,
    uniYear,
    latestCourses,
    partners
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
    <courses />
    <uniYear />
    <latestCourses />
    <partners />
    <section></section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 110px;
}
</style>
