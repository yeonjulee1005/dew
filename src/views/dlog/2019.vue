<template>
  <div class="logs-slider">
    <Menus />
    <div class="slide-page">
      <div class="slider-section">
        <el-button class="fas fa-angle-left" round @click="routerBack">
          &ensp;Prev Page
        </el-button>
        <div class="slides mt-30">
          <div
            ref="container"
            class="keen-slider"
          >
            <div
              class="keen-slider__slide slide"
              v-for="(item, index) in items"
              :key="index"
            >
              <a
                :href="item.img"
                class="glightbox"
              >
                <img
                  class="slide-image"
                  :src="item.img"
                  alt="image"
                />
              </a>
            </div>
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
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'
import 'glightbox/dist/css/glightbox.css'
import 'glightbox/dist/js/glightbox.js'
import GLightbox from 'glightbox'

const animation = { duration: 10000, easing: (t) => t }

export default defineComponent({
  title: '2019',
  components: {
    Menus, Footer
  },
  data () {
    return {
      items: {
        1: { img: require('@/assets/img/2019/201901.jpg') },
        2: { img: require('@/assets/img/2019/201902.jpg') },
        3: { img: require('@/assets/img/2019/201903.jpg') },
        4: { img: require('@/assets/img/2019/201904.jpg') },
        5: { img: require('@/assets/img/2019/201905.jpg') },
        6: { img: require('@/assets/img/2019/201906.jpg') },
        7: { img: require('@/assets/img/2019/201907.jpg') },
        8: { img: require('@/assets/img/2019/201908.jpg') },
        9: { img: require('@/assets/img/2019/201909.jpg') },
        10: { img: require('@/assets/img/2019/201910.jpg') },
        11: { img: require('@/assets/img/2019/201911.jpg') }
      }
    }
  },
  mounted () {
    // lightbox settings
    this.lightbox = GLightbox({
      selector: '.glightbox'
    })
  },
  setup () {
    const [container] = useKeenSlider({
      loop: true,
      slides: {
        perView: 3,
        spacing: 30
      },
      breakpoints: {
        '(max-width: 1199px)': {
          slides: {
            perView: 2,
            spacing: 60
          },
          loop: true
        },
        '(max-width: 767px)': {
          slides: {
            perView: 1,
            spacing: 60
          },
          loop: true
        }
      },
      mode: 'free',
      renderMode: 'performance',
      drag: true,
      created (s) {
        s.moveToIdx(1, true, animation)
      },
      updated (s) {
        s.moveToIdx(s.track.details.abs + 1, true, animation)
      },
      animationEnded (s) {
        s.moveToIdx(s.track.details.abs + 1, true, animation)
      }
    })
    return {
      container
    }
  },
  methods: {
    routerBack () {
      this.$router.push('/dlog')
    }
  }
})
</script>
