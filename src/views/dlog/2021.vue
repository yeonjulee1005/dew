<template>
  <div class="logs-slider">
    <Menus />
    <div class="slide-page">
      <div class="slider-section">
        <el-button round @click="routerBack">
          {{ prev }}
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
  title: '2021',
  components: {
    Menus, Footer
  },
  data () {
    return {
      prev: '< Prev Page',
      items: [
        { img: require('@/assets/img/2021/202101.jpg') },
        { img: require('@/assets/img/2021/202102.jpg') },
        { img: require('@/assets/img/2021/202103.jpg') },
        { img: require('@/assets/img/2021/202104.jpg') },
        { img: require('@/assets/img/2021/202105.jpg') },
        { img: require('@/assets/img/2021/202106.jpg') },
        { img: require('@/assets/img/2021/202107.jpg') },
        { img: require('@/assets/img/2021/202108.jpg') },
        { img: require('@/assets/img/2021/202109.jpg') },
        { img: require('@/assets/img/2021/202110.jpg') },
        { img: require('@/assets/img/2021/202111.jpg') },
        { img: require('@/assets/img/2021/202112.jpg') },
        { img: require('@/assets/img/2021/202113.jpg') },
        { img: require('@/assets/img/2021/202114.jpg') },
        { img: require('@/assets/img/2021/202115.jpg') },
        { img: require('@/assets/img/2021/202116.jpg') },
        { img: require('@/assets/img/2021/202117.jpg') },
        { img: require('@/assets/img/2021/202118.jpg') },
        { img: require('@/assets/img/2021/202119.jpg') },
        { img: require('@/assets/img/2021/202120.jpg') },
        { img: require('@/assets/img/2021/202121.jpg') },
        { img: require('@/assets/img/2021/202122.jpg') },
        { img: require('@/assets/img/2021/202123.jpg') },
        { img: require('@/assets/img/2021/202124.jpg') },
        { img: require('@/assets/img/2021/202125.jpg') },
        { img: require('@/assets/img/2021/202126.jpg') },
        { img: require('@/assets/img/2021/202127.jpg') },
        { img: require('@/assets/img/2021/202128.jpg') },
        { img: require('@/assets/img/2021/202129.jpg') },
        { img: require('@/assets/img/2021/202130.jpg') },
        { img: require('@/assets/img/2021/202131.jpg') },
        { img: require('@/assets/img/2021/202132.jpg') },
        { img: require('@/assets/img/2021/202133.jpg') },
        { img: require('@/assets/img/2021/202134.jpg') },
        { img: require('@/assets/img/2021/202135.jpg') },
        { img: require('@/assets/img/2021/202136.jpg') },
        { img: require('@/assets/img/2021/202137.jpg') },
        { img: require('@/assets/img/2021/202138.jpg') },
        { img: require('@/assets/img/2021/202139.jpg') },
        { img: require('@/assets/img/2021/202140.jpg') },
        { img: require('@/assets/img/2021/202141.jpg') },
        { img: require('@/assets/img/2021/202142.jpg') },
        { img: require('@/assets/img/2021/202143.jpg') }
      ]
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
