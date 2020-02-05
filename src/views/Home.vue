<template>
  <div>
    <div class="home">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-12 d-flex">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="text-white hero-text">
                We're a software development company
              </div>
              <!-- <div class="hero-tagline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div> -->
            </div>
          </div>
          <div class="col-md-7 col-sm-12">
            <div class="d-flex justify-content-center">
              <img class="" src="usprosoft-corp/img/banner-image.png" height="372">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <p class="h5 mb-4">We take on projects as a whole or as a compliment to the organization as “The” Dev/QA/Prod Support team, working side by side as a strategic partner for our clients.</p>
          <p class="h5 mb-4">We provide business analysis, UI/UX, Quality Assurance, full backend implementations and leveraging cloud topography.</p>
          <p class="h5 mb-4">We focus on Microsoft Technologies like .NET, C#, SQL Server, ASP.net and other front end frameworks such as Angular</p>
        </div>
      </div>

      <!-- <div class="row mt-5">
        <div class="col">
          <div class="card bg-light">
            <img src="https://picsum.photos/500/200?random=1" height="250px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-primary">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-light">
            <img src="https://picsum.photos/500/200?random=2" height="250px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-primary">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="card bg-light">
            <img src="https://picsum.photos/500/200?random=3" height="250px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-primary">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-light">
            <img src="https://picsum.photos/500/200?random=4" height="250px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-primary">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div> -->

      <div class="row mt-5 mb-5">
        <div class="col d-flex justify-content-center align-items-center">
          <button class="btn btn-danger btn-lg w-25">Contact us</button>
        </div>
      </div>
    </div>

    <!-- <div class="container-fluid p-0">
      <div class="secondary-content">
        <div class="container pb-5">
          <div class="row">
            <div class="col d-flex flex-column justify-content-center align-items-center">
              <h2 class="text-primary our-work text-uppercase">Something here about Our Work</h2>
              <h5 class="mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <img src="https://picsum.photos/500/200?random=5" height="350px" class="card-img-top" alt="...">
            </div>
            <div class="col">
              <img src="https://picsum.photos/500/200?random=6" height="350px" class="card-img-top" alt="...">
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <img src="https://picsum.photos/500/300?random=7" height="350px" class="card-img-top" alt="...">
            </div>
            <div class="col">
              <img src="https://picsum.photos/500/300?random=8" height="350px" class="card-img-top" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid p-0">
      <div class="home">
        <div class="container">
          <div class="d-flex align-items-center justify-content-center flex-column">
            <h2 class="text-white contact text-uppercase">Something about contacting us</h2>
            <h5 class="mt-3 contact-sub">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
          </div>
          <div class="row mt-5 mb-5">
            <div class="col d-flex justify-content-center align-items-center">
              <button class="btn btn-danger btn-lg">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container-fluid border-top">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
.home {
  width: 100%;
  background-color: $primary;
  .hero-text {
    font-weight: 900;
    font-size: 48px;
    line-height: 55px;
    margin-bottom: 10px;
    padding: 40px 0;
  }
  .hero-tagline {
    font-weight: 600;
    font-size: 28px;
    color: darken($primary, 25%);
  }
  .border2 {
    border: 3px solid;
  }
}
.secondary-content {
    background-color: $gray-200;
    padding-top: 80px;
    .our-work {
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: $danger;
    }
  }
  .contact {
    text-decoration: underline;
    text-decoration-color: $red;
  }
  .contact-sub {
      color: $text-white;
    }
</style>
