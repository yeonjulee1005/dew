<template>
  <div>
    <Menus />
    <div class="dLog">
      <div class="slider-section">
        <div ref="container" class="keen-slider">
          <div class="keen-slider__slide number-slide1">
            <el-link class="slide" :underline="false" href="/dlog/2019" >
              <div class="slide-desc">
                <span>
                  {{ log2019.desc }}
                </span>
                <span>
                  {{ log2019.year }}
                </span>
              </div>
              <img :src="this.log2019.img" :alt="this.log2019.year">
            </el-link>
          </div>
          <div class="keen-slider__slide number-slide2">
            <el-link class="slide" :underline="false" href="/dlog/2020" >
              <div class="slide-desc-reverse">
                <span>
                  {{ log2020.desc }}
                </span>
                <span>
                  {{ log2020.year }}
                </span>
              </div>
              <img :src="this.log2020.img" :alt="this.log2020.year">
            </el-link>
          </div>
          <div class="keen-slider__slide number-slide3">
            <el-link class="slide" :underline="false" href="/dlog/2021" >
              <div class="slide-desc">
                <span>
                  {{ log2021.desc }}
                </span>
                <span>
                  {{ log2021.year }}
                </span>
              </div>
              <img :src="this.log2021.img" :alt="this.log2021.year">
            </el-link>
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

const animation = { duration: 50000, easing: (t) => t * 4 }

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
        img: require('@/assets/img/2019/201908.jpg')
      },
      log2020: {
        desc: 'HISTORY OF',
        year: '2020',
        img: require('@/assets/img/2020/202051.jpg')
      },
      log2021: {
        desc: 'HISTORY OF',
        year: '2021',
        img: require('@/assets/img/2021/202108.jpg')
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
  .dLog {
    position: relative;
    width: 100vw;
    height: 70vh;
    .slider-section {
      position: absolute;
      display: flex;
      align-items: center;
      width: 1000px;
      height: 350px;
      top: 55%;
      left: 50%;
      overflow: hidden;
      transform: translateX(-50%) translateY(-50%);
      .keen-slider {
        width: 900px;
        margin: 0 auto;
        padding: 10px 0;
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
  .slide {
    display: unset;
    height: 100%;

    .slide-desc {
      position: absolute;
      right: 0;
      font-size: 3em;
      font-weight: 700;
      line-height: 0.9em;
      margin-right: 30px;
      bottom: 10px;
      span {
        display: flex;
        justify-content: flex-end;
        color: #fff;
      }
    }
    .slide-desc-reverse {
      position: absolute;
      left: 0;
      font-size: 3em;
      font-weight: 700;
      line-height: 0.9em;
      margin-left: 30px;
      bottom: 10px;
      span {
        display: flex;
        justify-content: flex-start;
        color: #fff;
      }
    }
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
