<template>
  <div>
    <Menus />
    <div class="dlog">
      <div class="slider-section">
        <div
          ref="container"
          class="keen-slider"
        >
          <div
            class="keen-slider__slide"
            v-for="(item, index) in items"
            :key="index"
          >
            <el-link
              class="slide"
              :underline="false"
              :href="item.src"
            >
              <div class="slide-desc">
                <span>
                  {{ item.desc }}
                </span>
                <span>
                  {{ item.year }}
                </span>
              </div>
              <img
                :src="item.img"
                :alt="item.year"
              />
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
import { spaceProps } from 'element-plus'

const animation = { duration: 50000, easing: (t) => t * 4 }

export default defineComponent({
  title: 'dlog',
  components: {
    Menus, Footer
  },
  data () {
    return {
      items: {
        log2019: {
          desc: 'HISTORY OF',
          year: '2019',
          img: require('@/assets/img/2019/201908.jpg'),
          src: '/dlog/2019'
        },
        log2020: {
          desc: 'HISTORY OF',
          year: '2020',
          img: require('@/assets/img/2020/202051.jpg'),
          src: '/dlog/2020'

        },
        log2021: {
          desc: 'HISTORY OF',
          year: '2021',
          img: require('@/assets/img/2021/202107.jpg'),
          src: '/dlog/2021'
        }
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
      breakpoints: {
        '(max-width: 767px)': {
          slides: {
            perView: 1,
            spacing: 60
          }
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
  }
})
</script>
