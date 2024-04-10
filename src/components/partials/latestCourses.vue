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
  <section id="latestCourses">
    <div class="container ">
      <div class="latest-courses">
        <h2>Latest Courses</h2>
        <div class="courses-cards mt-5">
          <div class="row row-cols">

            <div v-for="(course, index) in store.latestCourses" :key="index" class="col text-center d-flex flex-column align-items-center justify-content-center me-5">
              <div class="icon my-4"><img :src="course.icon" alt=""></div>
              <h5>{{course.name}}</h5>
              <p>Teacher: <strong>{{ course.teacher }}</strong></p>
              <p>Price: <strong>{{course.price}}</strong></p>
              <button class=" btn btn-secondary  "><strong>View Course</strong></button>
            </div>
      
          </div>
        </div>
      </div>
      <div class="discover">
        <div class="row row-cols ">
        
          <div class="col">
            <div class="small-img mb-3">
              <img src="/public/edu/img/Exam-icon.png" alt="">
            </div>
            <div class="text ">
              <h2><strong>The most efficient examination method</strong></h2>
              <p class=" my-5">
                 EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
              </p>
              <button class=" btn btn-secondary   ">Discover the Method</button>
            </div>
          </div>
          
          <div class="col">
            <div class="img">
              <img src="/public/edu/img/Exam-Illustration.png" alt="">
            </div>
          </div>
        
        </div>
        <div class="row row-cols mb-5  fees ">
        
          <div class="col">
            <div class="img">
              <img src="/public/edu/img/Girl-Illustration.png" alt="">
            </div>
          </div>

          <div class="col">
            <div class="small-img mb-3">
              <img src="/public/edu/img/Exam-icon-1.png" alt="">
            </div>
            <div class="text ">
              <h2><strong>Variable fees for international students</strong></h2>
              <p class=" my-5">
                 EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
              </p>
              <button class=" btn btn-secondary   ">List of Fees</button>
            </div>
          </div>
          
        
        </div>



      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  #latestCourses{
    h2{
        font-size: 3.4rem;
        color: var(--blu-text);
      }
    .latest-courses{
      margin-top: 170px;
        .courses-cards{
          .row{
            .col{
              width: 270px;
              aspect-ratio: 1;
              background-color: white;
              box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.067);
              .icon{
                width: 80px;
              }
              h5{
                color: var(--blu-text);
                font-weight: bold;
              }
              p{
                font-size: 0.8rem;
              }
              .btn{
                box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
                position: relative;
                top: 20px;
                width: 180px;
                height: 50px;
                background-color: var(--primary-color);
              }
            }
          }
        }
    }
    .discover{
      margin-top: 200px;
      .row{
        .col{
          .small-img{
            width: 60px;
          }
          .text{
            p{
              width: 75%;
            }
            .btn {
              background-color: var(--primary-color);
              padding: 22px 45px;
            
            }
          }
        }
      }
      .row.fees{
        margin-top: 100px;
      }
    }
  }
</style>