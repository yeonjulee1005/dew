<template>
  <div class="logs-slider">
    <Menus />
    <div class="slide-page">
      <div class="slider-section">
        <el-button class="fas fa-angle-left" round @click="routerBack">
          &ensp;Prev Page
        </el-button>
        <div class="slides">
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
        1: { img: require('@/assets/img/2021/202101.jpg') },
        2: { img: require('@/assets/img/2021/202102.jpg') },
        3: { img: require('@/assets/img/2021/202103.jpg') },
        4: { img: require('@/assets/img/2021/202104.jpg') },
        5: { img: require('@/assets/img/2021/202105.jpg') },
        6: { img: require('@/assets/img/2021/202106.jpg') },
        7: { img: require('@/assets/img/2021/202107.jpg') },
        8: { img: require('@/assets/img/2021/202108.jpg') },
        9: { img: require('@/assets/img/2021/202109.jpg') },
        10: { img: require('@/assets/img/2021/202110.jpg') },
        11: { img: require('@/assets/img/2021/202111.jpg') },
        12: { img: require('@/assets/img/2021/202112.jpg') },
        13: { img: require('@/assets/img/2021/202113.jpg') },
        14: { img: require('@/assets/img/2021/202114.jpg') },
        15: { img: require('@/assets/img/2021/202115.jpg') },
        16: { img: require('@/assets/img/2021/202116.jpg') },
        17: { img: require('@/assets/img/2021/202117.jpg') },
        18: { img: require('@/assets/img/2021/202118.jpg') },
        19: { img: require('@/assets/img/2021/202119.jpg') },
        20: { img: require('@/assets/img/2021/202120.jpg') },
        21: { img: require('@/assets/img/2021/202121.jpg') },
        22: { img: require('@/assets/img/2021/202122.jpg') },
        23: { img: require('@/assets/img/2021/202123.jpg') },
        24: { img: require('@/assets/img/2021/202124.jpg') },
        25: { img: require('@/assets/img/2021/202125.jpg') },
        26: { img: require('@/assets/img/2021/202126.jpg') },
        27: { img: require('@/assets/img/2021/202127.jpg') },
        28: { img: require('@/assets/img/2021/202128.jpg') },
        29: { img: require('@/assets/img/2021/202129.jpg') },
        30: { img: require('@/assets/img/2021/202130.jpg') },
        31: { img: require('@/assets/img/2021/202131.jpg') },
        32: { img: require('@/assets/img/2021/202132.jpg') },
        33: { img: require('@/assets/img/2021/202133.jpg') },
        34: { img: require('@/assets/img/2021/202134.jpg') },
        35: { img: require('@/assets/img/2021/202135.jpg') },
        36: { img: require('@/assets/img/2021/202136.jpg') },
        37: { img: require('@/assets/img/2021/202137.jpg') },
        38: { img: require('@/assets/img/2021/202138.jpg') },
        39: { img: require('@/assets/img/2021/202139.jpg') },
        40: { img: require('@/assets/img/2021/202140.jpg') },
        41: { img: require('@/assets/img/2021/202141.jpg') },
        42: { img: require('@/assets/img/2021/202142.jpg') },
        43: { img: require('@/assets/img/2021/202143.jpg') }
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
      mode: 'free',
      renderMode: 'performance',
      drag: true,
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
