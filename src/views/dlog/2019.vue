<template>
  <div>
    <Menus />
    <div class="slide-page">
      <div class="slider-section">
        <div class="slides">
          <div>
            <ul>
              <li style="float: left; margin: 5px;">
                <a href="https://dewdew.kr/img/avrosoft-detail.0193d681.jpg" class="glightbox">
                  <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg" alt="image" />
                </a>
              </li>
              <li style="float: left; margin: 5px;">
                <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg" class="glightbox">
                  <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg" alt="image" />
                </a>
              </li>
              <li style="float: left; margin: 5px;">
                <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
                  <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Menus from '@/components/menus.vue'
import Footer from '@/components/footer.vue'
import 'glightbox/dist/css/glightbox.css'
import 'glightbox/dist/js/glightbox.js'
import GLightbox from 'glightbox'

export default defineComponent({
  title: '2019',
  components: {
    Menus, Footer
  },
  mounted () {
    // lightbox settings
    this.lightbox = GLightbox({
      selector: '.glightbox'
    })
  }
})
</script>

<style lang="scss">
  .slide-page {
    position: relative;
    width: 100vw;
    height: 70vh;
    .slider-section {
      position: absolute;
      width: auto;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    .slides {
      display: inline-flex;
    }
  }
</style>
