<template>
  <div>
    <!-- Hero-area -->
    <div class="hero-area">
      <div class="arrow bounce">
        <span class="gold fa fa-arrow-down fa-2x" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="logo">
              <a href="#"><img src="@/assets/img/logo.png" alt=""/></a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-xl-6 col-md-8 col-sm-10">
            <div class="hero-content">
              <h4>Get More 5 Star Reviews Online</h4>
              <p>
                We make it simple and automatic for you to keep getting more 5
                star reviews on Zillow, Yelp, or Google.
              </p>

              <form @submit.prevent="submitEmail">
                <div class="input-group">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="What is your email address?"
                  />
                  <span class="input-group-append">
                    <button
                      :disabled="!email"
                      class="font-weight-bold btn btn-gold"
                      type="submit"
                    >
                      <span v-if="submittingEmail">Submitting...</span>
                      <span v-else>Join</span>
                    </button>
                  </span>
                </div>
              </form>
              <p class="padtop">
                Join our launch list to get notified when we launch and get a
                free 3 month trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- container -->
    <!-- Hero-area  END-->

    <!-- Branding-area -->
    <div class="branding-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8" style="padding-bottom: 1.5em;">
            <h4 class="mx-auto dark section-header">Get More Reviews On</h4>
            <img src="@/assets/img/reviewsites.png" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p>
              We can help you optimize your strategy to get the most reviews on
              the platform of your choice.
            </p>
            <p>
              In our experience, the best review site for each real estate agent
              depends on their business goals, the city/region they specialize
              in, and the typical client base that they serve.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Branding-area  END-->

    <!-- Promo-area -->
    <div class="promo-area gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h4 class="dark section-header">
              How Do We Get You More 5 Star Reviews?
            </h4>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="row promo-unit">
              <div class="promo-text col-3">
                <div class="promo-number">1</div>
              </div>
              <div class="promo-content col-7">
                <h5>We contact your clients</h5>
                <p>
                  We reach out to your clients on your behalf, after a deal is
                  completed.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="promo-right-inner">
              <img id="img1" src="@/assets/img/img1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Promo-area  END-->

    <!-- Dot-shape 1 -->
    <div class="dot-shape dot-shape1 d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <img id="arrows1" src="@/assets/img/arrows1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Dot-shape  END-->

    <!-- Promo-area 2-->
    <div class="promo-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="promo-right-inner">
              <img id="img2" src="@/assets/img/img2.png" alt="" />
            </div>
          </div>

          <div class="col-md-6 order-first order-md-last">
            <div class="row promo-unit">
              <div class="promo-text col-3">
                <div class="promo-number">2</div>
              </div>
              <div class="promo-content col-7">
                <h5>The client takes a quick online survey</h5>
                <p>
                  We give them a simple survey to make sure we know how they
                  feel about you before asking if they want to leave a review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Promo-area 2 END-->

    <!-- Dot-shape / arrows 2 -->
    <div class="dot-shape dot-shape2 d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <img id="arrows2" src="@/assets/img/arrows2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Dot-shape / arrows 2 END-->

    <!-- Promo-area 3 -->
    <div class="promo-area promo-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="promo-left-inner">
              <img src="@/assets/img/happy.png" alt="" />

              <div class="row promo-unit">
                <div class="promo-text col-3">
                  <div class="promo-number green-circle">😊</div>
                </div>
                <div class="promo-content col-7">
                  <h5>We ask for a review</h5>
                  <p>
                    If the client says they had a positive experience, we
                    encourage them to leave a review for you online.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="promo-right-inner">
              <img src="@/assets/img/sad.png" alt="" />
              <div class="row promo-unit">
                <div class="promo-text col-3">
                  <div class="promo-number red-circle">😭</div>
                </div>
                <div class="promo-content col-7">
                  <h5>We ask for feedback</h5>
                  <p>
                    If the client wasn't super happy with their experience, we
                    encourage them to give you direct feedback, which you can
                    resolve privately.
                    <a
                      href="JavaScript:Void(0);"
                      title='We do not encourage or facilitate "review gating". Instead, we optimize the user interface to create the best outcomes for both agents and clients.'
                      style="text-decoration: underline"
                      >*</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Promo-area 3 END-->

    <!-- Footer-subscrbe-area -->
    <div class="container">
      <div class="row subscribe-box-area justify-content-center">
        <div class="col-md-2 text-center">
          <div class="subscribe-logo">
            <img
              style="max-width: 100px;"
              src="@/assets/img/logo2.png"
              alt=""
            />
          </div>
        </div>
        <div class="bottom-join-form col-md-7 align-self-center">
          <h5 class="dark">
            Join our launch list to get a free 3 month trial when we launch.
          </h5>
          <form @submit.prevent="submitEmail">
            <div class="input-group">
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="What is your email address?"
              />
              <span class="input-group-append">
                <button
                  :disabled="!email"
                  class="font-weight-bold btn btn-gold"
                  type="submit"
                >
                  <span v-if="submittingEmail">Submitting...</span>
                  <span v-else>Join</span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Footer-subscrbe-area END-->

    <hr />

    <!-- Footer-area -->
    <div class="footer-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="widgets-menu d-none">
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="copyright text-center text-md-right">
              @ Agent Reviews 2019
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer-area END-->
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/agentreviews.css'

export default {
  head() {
    return {
      title: 'Landing Page'
    }
  },
  components: {},
  data() {
    return {
      email: '',
      submittingEmail: false
    }
  },
  methods: {
    submitEmail() {
      this.submittingEmail = true
      _cio.identify({
        // Required attributes
        id: this.email,
        email: this.email
      })
      this.submittingEmail = false
      this.$router.push({ path: 'thankyou' })
    }
  }
}
</script>

<style scoped>
.hero-area {
  background-image: url('~assets/img/hero-bg.png');
}
</style>
