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
  <footer>
    <div class="container d-flex  align-items-center  h-100 ">
      <div class="  row row-cols-4 d-flex justify-content-between  ">

        <div class="col ">
          <div class="logo">
            <img src="/edu/img/theme_eduprime_logo.png" alt="">
          </div>
          <p class=" my-5 ">
            Edu prime is the most versatile WordPress theme for educational purposes, showcasing universities, courses,
            secondary schools etc.
          </p>
          <div class="social">
            <ul class=" d-flex ">
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="col get-EduPrime">
          <ul>
            <h4 class="mb-5">Get EduPrime</h4>
            <li v-for="link in store.footerMenu.eduPrime" class="mb-3"><a :href="link.link">{{ link.name }}</a></li>
          </ul>
        </div>

        <div class="col">
          <ul>
            <h4 class="mb-5">Networking</h4>
            <li v-for="link in store.footerMenu.networking" class="mb-3"><a :href="link.link">{{ link.name }}</a></li>
          </ul>
        </div>
        <div class="col">
          <div class="searchbar">
            <input type="text" placeholder="Search ...">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss" scoped>
footer {
  color: white;
  height: 520px;
  background-color: var(--primary-color);

  .logo {
    width: 300px;
  }

  .social {
    position: relative;
    right: 30px;

    ul {

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border-radius: 50%;
        border: 2px solid var(--yellow-btn);
        width: 50px;
        aspect-ratio: 1;
        margin-right: 1.2rem;

        a {
          color: white;
        }
      }
    }
  }

  a,
  p {
    color: var(--white-text);
  }

  .searchbar {
    position: relative;

    input {
      border-radius: 2rem;
      border: none;
      padding: 0 30px;
      width: 20rem;
      height: 4rem;
    }

    button {
      background-color: var(--yellow-btn);
      border-radius: 50%;
      border: none;
      width: 64px;
      aspect-ratio: 1;
      color: white;
      position: absolute;
      right: -20px;
      top: 0;
    }
  }
}
</style>
