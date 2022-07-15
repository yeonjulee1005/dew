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
  title: '2022',
  components: {
    Menus, Footer
  },
  data () {
    return {
      prev: '< Prev Page',
      items: [
        { img: require('@/assets/img/2022/202201.jpg') },
        { img: require('@/assets/img/2022/202202.jpg') },
        { img: require('@/assets/img/2022/202203.jpg') },
        { img: require('@/assets/img/2022/202204.jpg') },
        { img: require('@/assets/img/2022/202205.jpg') },
        { img: require('@/assets/img/2022/202206.jpg') },
        { img: require('@/assets/img/2022/202207.jpg') },
        { img: require('@/assets/img/2022/202208.jpg') },
        { img: require('@/assets/img/2022/202209.jpg') },
        { img: require('@/assets/img/2022/202210.jpg') },
        { img: require('@/assets/img/2022/202211.jpg') },
        { img: require('@/assets/img/2022/202212.jpg') },
        { img: require('@/assets/img/2022/202213.jpg') },
        { img: require('@/assets/img/2022/202214.jpg') },
        { img: require('@/assets/img/2022/202215.jpg') },
        { img: require('@/assets/img/2022/202216.jpg') },
        { img: require('@/assets/img/2022/202217.jpg') },
        { img: require('@/assets/img/2022/202218.jpg') },
        { img: require('@/assets/img/2022/202219.jpg') },
        { img: require('@/assets/img/2022/202220.jpg') },
        { img: require('@/assets/img/2022/202221.jpg') },
        { img: require('@/assets/img/2022/202222.jpg') },
        { img: require('@/assets/img/2022/202223.jpg') },
        { img: require('@/assets/img/2022/202224.jpg') },
        { img: require('@/assets/img/2022/202225.jpg') },
        { img: require('@/assets/img/2022/202226.jpg') },
        { img: require('@/assets/img/2022/202227.jpg') },
        { img: require('@/assets/img/2022/202228.jpg') },
        { img: require('@/assets/img/2022/202229.jpg') }
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
      this.$router.push('/dLog')
    }

  }
})
</script>
