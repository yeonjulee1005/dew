<template>
  <div>
    <Menus />
    <div class="dLog">
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
                  {{ title }}
                </span>
                <span>
                  {{ item.year }}
                </span>
              </div>
              <img
                :src="item.img"
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
  title: 'dLog',
  components: {
    Menus, Footer
  },
  data () {
    return {
      title: 'HISTORY OF',
      items: [
        {
          year: '2022',
          img: require('@/assets/img/2022/202202.jpg'),
          src: '/dLog/2022'
        },
        {
          year: '2021',
          img: require('@/assets/img/2021/202107.jpg'),
          src: '/dLog/2021'
        },
        {
          year: '2020',
          img: require('@/assets/img/2020/202051.jpg'),
          src: '/dLog/2020'
        },
        {
          year: '2019',
          img: require('@/assets/img/2019/201908.jpg'),
          src: '/dLog/2019'
        }
      ]
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
