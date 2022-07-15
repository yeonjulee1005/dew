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
  title: '2020',
  components: {
    Menus, Footer
  },
  data () {
    return {
      prev: '< Prev Page',
      items: [
        { img: require('@/assets/img/2020/202001.jpg') },
        { img: require('@/assets/img/2020/202002.jpg') },
        { img: require('@/assets/img/2020/202003.jpg') },
        { img: require('@/assets/img/2020/202004.jpg') },
        { img: require('@/assets/img/2020/202005.jpg') },
        { img: require('@/assets/img/2020/202006.jpg') },
        { img: require('@/assets/img/2020/202007.jpg') },
        { img: require('@/assets/img/2020/202008.jpg') },
        { img: require('@/assets/img/2020/202009.jpg') },
        { img: require('@/assets/img/2020/202010.jpg') },
        { img: require('@/assets/img/2020/202011.jpg') },
        { img: require('@/assets/img/2020/202012.jpg') },
        { img: require('@/assets/img/2020/202013.jpg') },
        { img: require('@/assets/img/2020/202014.jpg') },
        { img: require('@/assets/img/2020/202015.jpg') },
        { img: require('@/assets/img/2020/202016.jpg') },
        { img: require('@/assets/img/2020/202017.jpg') },
        { img: require('@/assets/img/2020/202018.jpg') },
        { img: require('@/assets/img/2020/202019.jpg') },
        { img: require('@/assets/img/2020/202020.jpg') },
        { img: require('@/assets/img/2020/202021.jpg') },
        { img: require('@/assets/img/2020/202022.jpg') },
        { img: require('@/assets/img/2020/202023.jpg') },
        { img: require('@/assets/img/2020/202024.jpg') },
        { img: require('@/assets/img/2020/202025.jpg') },
        { img: require('@/assets/img/2020/202026.jpg') },
        { img: require('@/assets/img/2020/202027.jpg') },
        { img: require('@/assets/img/2020/202028.jpg') },
        { img: require('@/assets/img/2020/202029.jpg') },
        { img: require('@/assets/img/2020/202030.jpg') },
        { img: require('@/assets/img/2020/202031.jpg') },
        { img: require('@/assets/img/2020/202032.jpg') },
        { img: require('@/assets/img/2020/202033.jpg') },
        { img: require('@/assets/img/2020/202034.jpg') },
        { img: require('@/assets/img/2020/202035.jpg') },
        { img: require('@/assets/img/2020/202036.jpg') },
        { img: require('@/assets/img/2020/202037.jpg') },
        { img: require('@/assets/img/2020/202038.jpg') },
        { img: require('@/assets/img/2020/202039.jpg') },
        { img: require('@/assets/img/2020/202040.jpg') },
        { img: require('@/assets/img/2020/202041.jpg') },
        { img: require('@/assets/img/2020/202042.jpg') },
        { img: require('@/assets/img/2020/202043.jpg') },
        { img: require('@/assets/img/2020/202044.jpg') },
        { img: require('@/assets/img/2020/202045.jpg') },
        { img: require('@/assets/img/2020/202046.jpg') },
        { img: require('@/assets/img/2020/202047.jpg') },
        { img: require('@/assets/img/2020/202048.jpg') },
        { img: require('@/assets/img/2020/202049.jpg') },
        { img: require('@/assets/img/2020/202050.jpg') },
        { img: require('@/assets/img/2020/202051.jpg') },
        { img: require('@/assets/img/2020/202052.jpg') },
        { img: require('@/assets/img/2020/202053.jpg') },
        { img: require('@/assets/img/2020/202054.jpg') },
        { img: require('@/assets/img/2020/202055.jpg') },
        { img: require('@/assets/img/2020/202056.jpg') },
        { img: require('@/assets/img/2020/202057.jpg') },
        { img: require('@/assets/img/2020/202058.jpg') },
        { img: require('@/assets/img/2020/202059.jpg') },
        { img: require('@/assets/img/2020/202060.jpg') },
        { img: require('@/assets/img/2020/202061.jpg') },
        { img: require('@/assets/img/2020/202062.jpg') },
        { img: require('@/assets/img/2020/202063.jpg') },
        { img: require('@/assets/img/2020/202064.jpg') },
        { img: require('@/assets/img/2020/202065.jpg') },
        { img: require('@/assets/img/2020/202066.jpg') },
        { img: require('@/assets/img/2020/202067.jpg') },
        { img: require('@/assets/img/2020/202068.jpg') },
        { img: require('@/assets/img/2020/202069.jpg') },
        { img: require('@/assets/img/2020/202070.jpg') },
        { img: require('@/assets/img/2020/202071.jpg') },
        { img: require('@/assets/img/2020/202072.jpg') },
        { img: require('@/assets/img/2020/202073.jpg') },
        { img: require('@/assets/img/2020/202074.jpg') },
        { img: require('@/assets/img/2020/202075.jpg') },
        { img: require('@/assets/img/2020/202076.jpg') }
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
      this.$router.push('/dLog')
    }
  }
})
</script>
