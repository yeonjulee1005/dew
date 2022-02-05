<template>
  <div>
    <Menus />
    <div>
    <h1>작업중입니다.</h1>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menus from '@/components/menus.vue'
import Footer from '@/components/footer.vue'

export default defineComponent({
  title: 'Project',
  components: {
    Menus, Footer
  }
})
</script>
