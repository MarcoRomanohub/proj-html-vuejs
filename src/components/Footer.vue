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
      <div class="themes-btn d-flex flex-column ">
        <button class="btn btn-dark mb-3">
          <img src="/public/edu/svg/svg-3.svg" alt="">
          Purchase Theme
        </button>
        <button class="btn btn-dark ">
          <img src="/public/edu/svg/svg-2.svg" alt="">  
          Related Themes
        </button>
      </div>
      <div class=" ms-5 row row-cols d-flex    ">

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

        <div class="col ms-5 get-EduPrime">
          <ul>
            <h4 class="mb-5">Get EduPrime</h4>
            <li v-for="(link, index) in store.footerMenu.eduPrime" :key="index" class="mb-3"><a :href="link.link">{{ link.name }}</a></li>
          </ul>
        </div>

        <div class="col me-5  networking">
          <ul>
            <h4 class="mb-5">Networking</h4>
            <li v-for="(link, index) in store.footerMenu.networking" :key="index" class="mb-3"><a :href="link.link">{{ link.name }}</a></li>
          </ul>
        </div>

        <div class="col d-flex flex-column  ">
          <div class="searchbar">
            <input type="text" placeholder="Search ...">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="categories d-flex flex-column  align-items-end">
            <h6 class="mt-5 mb-3">Search Categories</h6>
            <div class="categories-btn">
              <ul class=" d-flex flex-wrap justify-content-end  ">
                <li v-for="(link, index) in store.categories" :key="index" class="btn btn-outline-secondary m-1  "><a :href="link.link">{{ link.name }}</a></li>
              </ul>
            </div>
          </div>
          <p>ModelTheme. All rights reserved.</p>
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
  position: relative;

  .themes-btn{
    position: absolute;
    left: 30px;
    bottom: 30px;
    button{
      padding-right: 35px;
      background-color: #454545;
      color: #8B8B8A;
      border: none;
      width: 155px;
      height: 35px;
      font-size: 0.7rem;
      font-weight: 400;
      img{
        width: 15px;
      }
    }
  }
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
    &:hover{
        color: var(--yellow-btn);
    }
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
      right: -10px;
      top: 0;
    }
  }
  .categories{
    li {
      font-size: 0.7rem;
    }
    .btn{
      border-radius: 2rem;
      border: 1px solid white;
    }
  }
  .col:last-child{
    p{
      color: #E9D758;
      text-align: end;
    }
  }
}
</style>
