<template>
  <div>
    <div class="dLog">
      <div class="slider-section">
        <div class="slide-wrapper">
          <div class="slides">
            <div class="slide">
              <a
                data-title="타이틀"
                data-description="데이터디스크립션"
                href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg"
                class="glightbox"
              >
                <img style="height: 30vh;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg" alt="image" />
              </a>
            </div>
            <div class="slide">
              <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg" class="glightbox">
                <img style="height: 30vh;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg" alt="image" />
              </a>
            </div>
            <div class="slide">
              <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
                <img style="height: 30vh;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
              </a>
            </div>
          </div>
        </div>
        <p class="controls">
          <span class="prev">
            prev
          </span>
          <span class="next">
            next
          </span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Footer from '@/components/footer.vue'
import Glightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import 'glightbox/dist/js/glightbox'

export default defineComponent({
  title: 'dLog',
  components: {
    Footer
  },
  mounted () {
    // lightbox settings
    this.lightbox = Glightbox({
      selector: '.glightbox'
    })
  }
})
</script>

<style lang="scss">
  .dLog {
    position: relative;
    width: 100vw;
    height: 100vh;
    .slider-section {
      position: absolute;
      width: 1200px;
      height: 300px;
      top: 50%;
      left: 50%;
      overflow: hidden;
      transform: translateX(-50%) translateY(-50%);
      .slides {
        display: inline-flex;
        .slide {
          width: 300px;
        }
      }
    }
  }
</style>
