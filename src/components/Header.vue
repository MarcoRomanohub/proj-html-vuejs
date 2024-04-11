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
  <header>
    <div class=" h-100 container-fluid d-flex justify-content-between align-items-center pt-4 ">
      <div class="logo ms-4">
        <img src="/edu/img/theme_eduprime_logo.png" alt="">
      </div>
      <div class="menu d-flex me-5 ">
        <ul class=" d-flex ">
          <li v-for="(link, index) in store.headerMenu" :key="index"><a :href="link.link"><strong>{{ link.name }}</strong></a></li>
        </ul>
        <button class=" btn btn-secondary hover-btn4 "><strong>VIEW COURSES</strong></button>
      </div>
    </div>
    <jumbotron />
  </header>

</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  background-image: url(/public/edu/img/theme_slider2_bg-1.jpg); 
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 99999px #e56767dd;
  z-index: 999;
  .logo {
    width: 300px;
  }
}

.menu {
  position: relative;
  top: 10px;

  ul {
    position: relative;
    top: 15px;
    list-style: none;

    li {
      margin: 0 2rem;
    }

    a {
      color: white;
      text-decoration: none;
      &:hover{
        color: var(--yellow-btn);
      }
    }
  }

  .btn {
    background-color: var(--yellow-btn);
    border: none;
    border-radius: 2rem;
    padding: 1rem 1.8rem;
  }
}
</style>
