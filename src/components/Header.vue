<script>
import { store } from '../data/store'
export default {

  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <header>
    <div class=" h-100 container-fluid d-flex justify-content-between align-items-center  ">
      <div class="logo">
        <img src="/edu/img/theme_eduprime_logo.png" alt="">
      </div>
      <div class="menu d-flex ">
        <ul class=" d-flex ">
          <li v-for="link in store.headerMenu"><a href="#">{{ link.name }}</a></li>
        </ul>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>
header {
  height: 110px;
  width: 100vw;
  background-color: var(--primary-color);

  .logo {
    width: 300px;
  }
}

.menu {
  position: relative;
  top: 10px;

  ul {
    list-style: none;

    li {
      margin-left: 2rem;
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
