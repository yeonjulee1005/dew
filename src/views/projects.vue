<template>
  <div>
    <Menu />
    <div>
    <h1>작업중입니다.</h1>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '@/components/menu.vue'
import Footer from '@/components/footer.vue'

export default defineComponent({
  title: 'Project',
  components: {
    Menu, Footer
  }
})
</script>
