<template>
  <div>
    <Menus />
    <div class="projects">
      <div class="project-section flex flex-row flex-justify-evenly">
        <div
          class="project-content flex flex-justify-center flex-align-center"
          v-for="(item, index) in items"
          :key="index"
        >
          <el-link
            :underline="false"
            :href="item.src"
          >
            <span>
              {{ item.title }}
            </span>
          </el-link>
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
  },
  data () {
    return {
      items: {
        calculate: {
          src: '/projects/calculator',
          title: ''
        },
        test: {
          // src: '/projects/calculator',
          title: ''
        },
        test2: {
          // src: '/projects/calculator',
          title: ''
        }
      }
    }
  }
})
</script>
