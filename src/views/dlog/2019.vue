<template>
  <div>
    <Menus />
    <div class="slide-page">
      <div class="slider-section">
        <div class="slides">
          <div ref="container" class="keen-slider">
            <div class="keen-slider__slide" v-for="(item, index) in items" :key="index">
              <a :href="item.img" class="glightbox">
                <img :src="item.img" alt="image" />
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
        spacing: 60
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

[class^="number-slide"],
[class*="number-slide"] {
  background: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5em;
  color: #fff;
  font-weight: 700;
  width: 300px;
  height: 300px;
  max-height: 100vh;
  .slide {
    display: unset;
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}

.number-slide1 {
  border-radius: 50px;
  box-shadow: 3px 3px 5px #000;
}

.number-slide2 {
  border-radius: 50px;
  box-shadow: 3px 3px 5px #000;
}

.number-slide3 {
  border-radius: 50px;
  box-shadow: 3px 3px 5px #000;
}
</style>
