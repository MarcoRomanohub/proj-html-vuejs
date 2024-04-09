<script>
export default {
  
  }

</script>

<template>
 <div id="jumbotron" class="red">
  <div class="jumbo-container">
    <div class="cta w-100 h-100  d-flex flex-column  justify-content-center align-items-center ">
      <h2>Key to your succes</h2>
      <p class=" text-center ">EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.</p>
      <div class="cta-btn d-flex my-4 ">
        <button class=" btn btn-secondary yellow-btn mx-4 ">Search courses</button>
        <button class=" btn btn-outline-danger ">Apply for university</button>
      </div>
    </div>
  </div>
 </div> 
</template>

<style lang="scss" scoped>
  #jumbotron{
    color: white;
    height: 700px;
    width: 100%;
    background-image: url(/public/edu/img/theme_slider2_bg-1.jpg); 
    box-shadow: inset 0 0 0 99999px #e56767c7;
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
        }
      }
    }
  }

</style>
