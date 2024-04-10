  <script>
  export default {
  
  }
  </script>

<template>
  
  <section id="courses">
    
    <div class="bg_img">
      <img src="/public/edu/img/home-background.png" alt="">
    </div>

    <div class="container ">
      <div class="row row-cols-2 ">

        <div class="col">
          <div class="text">
            <h2>Thousands of courses for any type of student</h2>
            <p>
              At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides. 
            </p>
            <button class=" btn btn-secondary   ">Browse trough courses</button>
          </div>
        </div>

        <div class="col">
          <div class="img">
            <img src="/public/edu/img/Graduation-Illustration.png" alt="">
          </div>
        </div>

      </div>
    </div>
    

  </section>

</template>


<style lang="scss" scoped>
 #courses{
    position: relative;

  .container{
    margin-top: 150px;
    position: absolute;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    }
  .text{
    h2{
      font-size: 3.7rem;
    }
    p{
      color: #454545;
      margin: 40px 0;
    }
    .btn {
      background-color: var(--yellow-btn);
      border: none;
      border-radius: 2rem;
      padding: 1rem 1.8rem;
    }
  }
}
</style>