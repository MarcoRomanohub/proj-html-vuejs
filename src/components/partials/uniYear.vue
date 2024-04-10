 <script>
 export default {
 
 }
 </script>

 <template>
   <section id="uniYear" >

    <div class="container">
      <div class="title d-flex flex-column align-items-center ">
        <div class="icon mb-4"><img src="/public/edu/img/Clock-and-Bell.png" alt=""></div>
        <h2>University Year</h2>
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
    </div>


   </section>
 </template>
 
 
 <style lang="scss" scoped>
  #uniYear{
    height: 1000px;
    background-color: var(--primary-color);
    padding-top: 200px;
    color: white;
    p{
      color: var(--white-text);
    }
    .title{
      .icon{
        width: 65px;
      }
      h2{
        font-size: 3.4rem;
        background-color: rgba(203, 2, 2, 0.664);
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
  }
 </style>