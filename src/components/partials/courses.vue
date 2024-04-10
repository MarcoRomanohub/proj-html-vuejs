  <script>
  import {store} from '../../data/store'
  export default {
    data(){
      return{
        store
      }
    }
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
      <div class=" d-flex justify-content-center row row-cols-5 ">
        <div v-for="(faculty, index) in store.faculties"  :key="index" class="col d-flex flex-column align-items-center justify-content-center ">
          <img :src="faculty.image" alt="">
          <h5>{{ faculty.name }}</h5>
        </div>
      </div>
    </div>

    <div class="container faculty">
      <div class="row row-cols-2 ">
        <div class="col d-flex justify-content-center ">
          <div class="img">
            <img src="/public/edu/img/Gavel-Illustration-e1556884768193.png" alt="">
          </div>
        </div>
        <div class="col">
          <div class="text">
            <h3>Law Faculty</h3>
            <p>
              Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the teory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions. 
            </p>
            <button class=" btn btn-secondary  ">Read more</button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-wave">
      <img src="/public/edu/svg/svg-0.svg" alt="">
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
    h3{
        font-size: 3rem;
      }
      h2, h3{
        color: var(--blu-text);
      }
      p{
        color: #454545;
        margin: 40px 0;
      }
      .btn{
        border: none;
        border-radius: 2rem;
        padding: 1rem 1.8rem;
      }
  .container.courses{
    margin-top: 130px;
    
    
    .small-img{
      width: 60px;
    }
    .text{

      .btn {
        background-color: var(--yellow-btn);
        
      }
    }
  }
  .container.faculties{
    margin-top: 200px;
    .row{
      .col{
        width: 240px;
        height: 200px;
        border: 1px solid rgba(0, 0, 0, 0.070);
        img{
          width: 90px;
          margin-bottom: 15px;
        }
        h5{
          color: var(--primary-color);
        }
      }
    }
  }
  .container.faculty{
    margin-top: 100px;
    p{
      color: #8B8B8A;
    }
    .btn{
      padding: 20px 45px;
      background-color: var(--primary-color);
    }
  }
  .bg-wave{
    width: max-content
  }
}
</style>