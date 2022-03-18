<template>
  <div>
    <Menus />
    <div class="calculate">
      calculate
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Menus from '@/components/menus.vue'
import Footer from '@/components/footer.vue'

export default defineComponent({
  title: 'calculate',
  components: {
    Menus, Footer
  },
  data () {
    return {
    }
  },
  setup () {
  //   const [container] = useKeenSlider({
  //     loop: true,
  //     slides: {
  //       perView: 2,
  //       spacing: 60
  //     },
  //     mode: 'free',
  //     renderMode: 'performance',
  //     drag: true,
  //     breakpoints: {
  //       '(max-width: 767px)': {
  //         slides: {
  //           perView: 1,
  //           spacing: 60
  //         }
  //       }
  //     },
  //     created (s) {
  //       s.moveToIdx(1, true, animation)
  //     },
  //     updated (s) {
  //       s.moveToIdx(s.track.details.abs + 1, true, animation)
  //     },
  //     animationEnded (s) {
  //       s.moveToIdx(s.track.details.abs + 1, true, animation)
  //     }
  //   })
  //   return {
  //     container
  //   }
  }
})
</script>
