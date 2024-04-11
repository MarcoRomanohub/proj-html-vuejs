<script>
export default {
  
  }

</script>

<template>
 <div id="jumbotron" class="red">
  <div class="side-nav ">
    <ul>
      <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
      <li class="my-2"><a href="#"><i class="fa-solid fa-book-open"></i></a></li>
      <li><a href="#"><i class="fa-solid fa-gear"></i></a></li>
    </ul>
  </div>
  <div class="jumbo-container">
    <div class="cta w-100 h-100  d-flex flex-column  justify-content-center align-items-center ">
      <h2>Key to your success</h2>
      <p class=" text-center ">EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.</p>
      <div class="cta-btn d-flex my-4 ">
        <button class=" btn btn-secondary yellow-btn hover-btn2 mx-4 ">Search courses</button>
        <button class=" btn btn-outline-danger ">Apply for university</button>
      </div>
    </div>
  </div>
  <div class="wave">
    <img src="/public/edu/img/Wave-1.png" alt="">
  </div>
 </div> 
</template>

<style lang="scss" scoped>
  #jumbotron{
    position: relative;
    color: white;
    height: 700px;
    width: 100%;

    .side-nav{
      height: auto;
      width: 30px;
      background-color: var(--yellow-btn);
      position: absolute;
      left: 0;
      top: 40%;
      border-radius: 0.2rem;
      ul{
        position: relative;
        right: 25px;
        top: 5px;

        li{
          a{
            color: white;
          }
  
        }
      }
    }
    .jumbo-container{
      margin: 0 auto;
      width: 40%;
      height: 100%;
      .cta{
        h2{
          font-size: 3.5rem;
          margin-bottom: 30px;
        }
        p{
          line-height: 2rem;
          color: var(--white-text);
          font-size: 1.2rem;
        }
        .btn {
          border: none;
          border-radius: 2rem;
          padding: 1rem 1.8rem;
        }
        .cta-btn button:last-child {
          background-color: white;
          &:hover{
            background-color: #e56767c7;
          }
        }
      }
    }
    .wave{
      position: absolute;
      bottom: 0;
      width: max-content;
      
    }
  }

</style>
