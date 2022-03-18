<template>
  <div>
    <Menus />
    <div class="projects">
      <div class="project-section flex flex-row flex-justify-evenly">
        <div class="project-content flex flex-justify-center flex-align-center">
          <span>
            Custom Calculator
          </span>
        </div>
        <div class="project-content flex flex-justify-center flex-align-center">
          <span>
            프로젝트 작업중
          </span>
        </div>
        <div class="project-content flex flex-justify-center flex-align-center">
          <span>
            프로젝트 작업중
          </span>
        </div>
      </div>
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
