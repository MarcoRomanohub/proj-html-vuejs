  <script>
  export default {
  
  }
  </script>

<template>
  
  <section id="courses">
    
    
    <div class="container courses ">
      <div class="row row-cols-2 ">
        
        <div class="col ">
          <div class="small-img mb-3">
            <img src="/public/edu/img/Books-icon.png" alt="">
          </div>
          <div class="text ">
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

    <div class="bg_img">
      <img src="/public/edu/img/home-background.png" alt="">
    </div>

    <div class="container faculties text-center ">
      <h2>Faculties available at EduPrime</h2>
      <p>A single university with a load of courses, tailored <br> to satisfy any sudent's needs.</p>
    </div>

    

  </section>

</template>


<style lang="scss" scoped>
 #courses{
    position: relative;
    .bg_img{
        position: absolute;
        top: -100px;
        z-index: -1;
    }
    h2{
        font-size: 3.7rem;
      }
      p{
        color: #454545;
        margin: 40px 0;
      }
  .container.courses{
    margin-top: 130px;
    
    
    .small-img{
      width: 60px;
    }
    .text{

      .btn {
        background-color: var(--yellow-btn);
        border: none;
        border-radius: 2rem;
        padding: 1rem 1.8rem;
      }
    }
  }
  .container.faculties{
    margin-top: 200px;
  }
}
</style>