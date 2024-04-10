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
   <section id="uniYear" >

    <div class="container">
      <div class="title d-flex flex-column align-items-center ">
        <div class="icon mb-4"><img src="/public/edu/img/Clock-and-Bell.png" alt=""></div>
        <h2 class="bg_red">University Year</h2>
      </div>
      <div class="timeline">
        <div class="top-text">
          <div class="row row-cols-2 ">
            <div class="col  text-center ">
              <h4>Demo Classes</h4>
              <p>In the first week, student try to accomodate with the <br> teaching style and choose their optional courses.</p>
            </div>
            <div class="col text-center">
              <h4>Graduation Day</h4>
              <p>On the day of graduation, all students gather for the <br> ceremony and then network and party among others </p>
            </div>
          </div>
        </div>
        <div class="icon text-center"><img src="/public/edu/img/Timeline-Item.png" alt=""></div>
        <div class="bottom-text">
          <div class="row row-cols-2 ">
            <div class="col  text-center ">
              <h4>Orientation</h4>
              <p>In the first week, student try to accomodate with the <br> teaching style and choose their optional courses.</p>
            </div>
            <div class="col text-center">
              <h4>Evaluation</h4>
              <p>On the day of graduation, all students gather for the <br> ceremony and then network and party among others </p>
            </div>
          </div>
        </div>
      </div>
      <div class="title d-flex flex-column align-items-center ">
        <div class="icon mb-4 mt-5 "><img src="/public/edu/img/upcoming-events-calendar-icon.png" alt=""></div>
        <h2>Upcoming Events</h2>
      </div>
      <div class="row row-cols-3 events mt-5 ms-3 ">
        
        <div v-for="(event, index) in store.upcomingEvents" :key="index" class="col">
          <div class="card-event text-center d-flex flex-column align-items-center justify-content-center pt-5   ">
            <h3>{{ event.title }}</h3>
            <p class="date">
              {{event.date}}
            </p>
            <p>
              {{event.info}}
            </p>
            <button class=" btn btn-secondary  ">+ Find More</button>
          </div>
        </div>
     
      </div>

      <div class="all-events-btn d-flex justify-content-center">
        <button class=" btn btn-secondary yellow-btn mb-5  ">View All Events</button>
      </div>

    </div>
    <img src="/public/edu/img/Wave-1.png" alt="">

   </section>
 </template>
 
 
 <style lang="scss" scoped>
  #uniYear{
    height: 1600px;
    background-color: var(--primary-color);
    padding-top: 200px;
    color: white;
    .bg_red{
      background-color: rgba(203, 2, 2, 0.664)
    }
    p{
      color: var(--white-text);
    }
    .title{
      .icon{
        width: 65px;
      }
      h2{
        font-size: 3.4rem;
      }
    }
    .timeline{
      margin-top: 100px;
      .top-text{
        .row{
          .col:first-child{
            position: relative;
            left: 200px;
          }
        }
      }
      .bottom-text{
        .row{
          .col:last-child{
            position: relative;
            right: 200px;
          }
        }
      }
    }
    .events{
      .card-event{
        width: 360px;
        height: 200px;
        background-color: white;
        border-radius: 1.1rem;
        h3{
          color: var(--blu-text);
        }
        p{
          color: #8B8B8A;
          &.date{
            font-size: 0.8rem;
          }
        }
        .btn{
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
          position: relative;
          top: 5px;
          width: 130px;
          background-color: var(--primary-color);
        }
      }
    }
    .all-events-btn{
      margin-top: 100px;
      button{
        padding: 20px 40px;
      }
    }
  }
 </style>