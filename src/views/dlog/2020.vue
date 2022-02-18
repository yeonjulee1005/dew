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
        1: { img: require('@/assets/img/2020/202001.jpg') },
        2: { img: require('@/assets/img/2020/202002.jpg') },
        3: { img: require('@/assets/img/2020/202003.jpg') },
        4: { img: require('@/assets/img/2020/202004.jpg') },
        5: { img: require('@/assets/img/2020/202005.jpg') },
        6: { img: require('@/assets/img/2020/202006.jpg') },
        7: { img: require('@/assets/img/2020/202007.jpg') },
        8: { img: require('@/assets/img/2020/202008.jpg') },
        9: { img: require('@/assets/img/2020/202009.jpg') },
        10: { img: require('@/assets/img/2020/202010.jpg') },
        11: { img: require('@/assets/img/2020/202011.jpg') },
        12: { img: require('@/assets/img/2020/202012.jpg') },
        13: { img: require('@/assets/img/2020/202013.jpg') },
        14: { img: require('@/assets/img/2020/202014.jpg') },
        15: { img: require('@/assets/img/2020/202015.jpg') },
        16: { img: require('@/assets/img/2020/202016.jpg') },
        17: { img: require('@/assets/img/2020/202017.jpg') },
        18: { img: require('@/assets/img/2020/202018.jpg') },
        19: { img: require('@/assets/img/2020/202019.jpg') },
        20: { img: require('@/assets/img/2020/202020.jpg') },
        21: { img: require('@/assets/img/2020/202021.jpg') },
        22: { img: require('@/assets/img/2020/202022.jpg') },
        23: { img: require('@/assets/img/2020/202023.jpg') },
        24: { img: require('@/assets/img/2020/202024.jpg') },
        25: { img: require('@/assets/img/2020/202025.jpg') },
        26: { img: require('@/assets/img/2020/202026.jpg') },
        27: { img: require('@/assets/img/2020/202027.jpg') },
        28: { img: require('@/assets/img/2020/202028.jpg') },
        29: { img: require('@/assets/img/2020/202029.jpg') },
        30: { img: require('@/assets/img/2020/202030.jpg') },
        31: { img: require('@/assets/img/2020/202031.jpg') },
        32: { img: require('@/assets/img/2020/202032.jpg') },
        33: { img: require('@/assets/img/2020/202033.jpg') },
        34: { img: require('@/assets/img/2020/202034.jpg') },
        35: { img: require('@/assets/img/2020/202035.jpg') },
        36: { img: require('@/assets/img/2020/202036.jpg') },
        37: { img: require('@/assets/img/2020/202037.jpg') },
        38: { img: require('@/assets/img/2020/202038.jpg') },
        39: { img: require('@/assets/img/2020/202039.jpg') },
        40: { img: require('@/assets/img/2020/202040.jpg') },
        41: { img: require('@/assets/img/2020/202041.jpg') },
        42: { img: require('@/assets/img/2020/202042.jpg') },
        43: { img: require('@/assets/img/2020/202043.jpg') },
        44: { img: require('@/assets/img/2020/202044.jpg') },
        45: { img: require('@/assets/img/2020/202045.jpg') },
        46: { img: require('@/assets/img/2020/202046.jpg') },
        47: { img: require('@/assets/img/2020/202047.jpg') },
        48: { img: require('@/assets/img/2020/202048.jpg') },
        49: { img: require('@/assets/img/2020/202049.jpg') },
        50: { img: require('@/assets/img/2020/202050.jpg') },
        51: { img: require('@/assets/img/2020/202051.jpg') },
        52: { img: require('@/assets/img/2020/202052.jpg') },
        53: { img: require('@/assets/img/2020/202053.jpg') },
        54: { img: require('@/assets/img/2020/202054.jpg') },
        55: { img: require('@/assets/img/2020/202055.jpg') },
        56: { img: require('@/assets/img/2020/202056.jpg') },
        57: { img: require('@/assets/img/2020/202057.jpg') },
        58: { img: require('@/assets/img/2020/202058.jpg') },
        59: { img: require('@/assets/img/2020/202059.jpg') },
        60: { img: require('@/assets/img/2020/202060.jpg') },
        61: { img: require('@/assets/img/2020/202061.jpg') },
        62: { img: require('@/assets/img/2020/202062.jpg') },
        63: { img: require('@/assets/img/2020/202063.jpg') },
        64: { img: require('@/assets/img/2020/202064.jpg') },
        65: { img: require('@/assets/img/2020/202065.jpg') },
        66: { img: require('@/assets/img/2020/202066.jpg') },
        67: { img: require('@/assets/img/2020/202067.jpg') },
        68: { img: require('@/assets/img/2020/202068.jpg') },
        69: { img: require('@/assets/img/2020/202069.jpg') },
        70: { img: require('@/assets/img/2020/202070.jpg') },
        71: { img: require('@/assets/img/2020/202071.jpg') },
        72: { img: require('@/assets/img/2020/202072.jpg') },
        73: { img: require('@/assets/img/2020/202073.jpg') },
        74: { img: require('@/assets/img/2020/202074.jpg') },
        75: { img: require('@/assets/img/2020/202075.jpg') },
        76: { img: require('@/assets/img/2020/202076.jpg') }
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
