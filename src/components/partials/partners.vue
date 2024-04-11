  <script>
  export default {
  
  }
  </script>

<template>
  
  <section id="partners">

    <div class="container text-center mt-5  ">
      <h2><strong>Partners</strong></h2>
      <p class=" my-5">Leverage agile frameworks to provide a robust synopsis for high level <br> overviews. Iterative approaches to corporate strategy.</p>
      <div class=" row row-cols-8 ">

        <div class="col"><img src="/public/edu/img/partner-2.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-3.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-4.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-5.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-6.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-8.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-1.png" alt=""></div>
        <div class="col"><img src="/public/edu/img/partner-7.png" alt=""></div>
        
      </div>
    </div>

   <div class="bg-wave">
      <img src="/public/edu/img/background-wave3.png" alt="">
   </div>

  </section>

</template>


<style lang="scss" scoped>
  #partners{
    height: 600px;
    h2{
        font-size: 3.4rem;
        color: var(--blu-text);
      }
    .row{
      .col{
        img{
          height: 50px;
          filter: opacity(30%);
          &:hover{
            filter: opacity(100%);
          }
        }
      }
    }
    .bg-wave{
      position: relative;
      left: 240px;
      top: 50px;
      img{  
        background-color: rgba(211, 211, 211, 0.265);
      }
    }
  }
</style>