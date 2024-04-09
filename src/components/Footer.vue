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
    <div class="container">
      <div class=" row row-cols-4 d-flex justify-content-between  ">
        <div class="col ">
          <div class="logo">
            <img src="/edu/img/theme_eduprime_logo.png" alt="">
          </div>
          <p class=" my-4 ">
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
        <div class="col">

        </div>
        <div class="col">a</div>
        <div class="col">a</div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss" scoped>
footer {
  height: 520px;
  background-color: var(--primary-color);

  .logo {
    width: 300px;
  }

  .social {
    position: relative;
    right: 30px;

    ul {
      list-style: none;

      li {
        background-color: transparent;
        border-radius: 50%;
        border: 2px solid var(--yellow-btn);
        padding: 10px 16px;
        margin-right: 1.2rem;

        a {
          color: white;
        }
      }
    }
  }
}
</style>
