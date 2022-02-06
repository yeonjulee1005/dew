<template>
  <div>
    <Menus />
    <div class="slide-page">
      <div class="slider-section">
        <div class="slides">
          slide
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

export default defineComponent({
  title: '2019',
  components: {
    Menus, Footer
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
</style>
