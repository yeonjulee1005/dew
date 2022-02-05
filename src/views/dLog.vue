<template>
  <div>
    <Menus />
    <div class="dLog">
      <div class="slider-section">
        <div ref="container" class="keen-slider">
          <div class="keen-slider__slide number-slide1">
            <span>
              {{ log2019.desc }}
            </span>
            <span>
              {{ log2019.year }}
            </span>
            <img :src="this.log2019.img" :alt="this.log2019.year">
          </div>
          <div class="keen-slider__slide number-slide2">
            <span>
              {{ log2020.desc }}
            </span>
            <span>
              {{ log2020.year }}
            </span>
          </div>
          <div class="keen-slider__slide number-slide3">
            <span>
              {{ log2021.desc }}
            </span>
            <span>
              {{ log2021.year }}
            </span>
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

const animation = { duration: 30000, easing: (t) => t }

export default defineComponent({
  title: 'dLog',
  components: {
    Menus, Footer
  },
  data () {
    return {
      log2019: {
        desc: 'HISTORY OF',
        year: '2019',
        img: require('@/assets/img/archive/2019/201908.jpg')
      },
      log2020: {
        desc: 'HISTORY OF',
        year: '2020',
        img: ''
      },
      log2021: {
        desc: 'HISTORY OF',
        year: '2021',
        img: ''
      }
    }
  },
  setup () {
    const [container] = useKeenSlider({
      loop: true,
      slides: {
        perView: 2,
        spacing: 60
      },
      mode: 'free-snap',
      renderMode: 'performance',
      drag: true,
      created (s) {
        s.moveToIdx(3, true, animation)
      },
      updated (s) {
        s.moveToIdx(s.track.details.abs + 3, true, animation)
      },
      animationEnded (s) {
        s.moveToIdx(s.track.details.abs + 3, true, animation)
      }
    })
    return {
      container
    }
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
      width: 1000px;
      height: 300px;
      top: 50%;
      left: 50%;
      overflow: hidden;
      transform: translateX(-50%) translateY(-50%);
      .keen-slider {
        width: 900px;
        margin: 0 auto;
      }
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

  span {
    color: #fff;
    line-height: 0.8em;
    margin-bottom: 5px;
  }
}

.number-slide1 {
}

.number-slide2 {
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
}

.number-slide3 {
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
}

</style>
