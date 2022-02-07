<template>
  <el-footer height="200px">
    <div class="flex flex-justify-center flex-align-center flex-column footer-section">
      <div class="flex flex-column">
        <div class="flex flex-row mb-30">
          <el-link :underline="false" type="warning" :href="this.home.url">
            <div class="footer-menu">
              {{ home.title }}
            </div>
          </el-link>
          <el-link :underline="false" type="warning" :href="this.projects.url">
            <div class="footer-menu">
              {{ projects.title }}
            </div>
          </el-link>
          <el-link :underline="false" type="warning" :href="this.dlog.url">
            <div class="footer-menu">
              {{ dlog.title }}
            </div>
          </el-link>
        </div>
      </div>
      <div class="flex copyright">
        {{ copyright }}
      </div>
      <div class="flex copyright">
        {{ designed }}
      </div>
    </div>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  data () {
    return {
      title: 'Footer',
      home: {
        title: 'Home',
        url: '/'
      },
      projects: {
        title: 'Projects',
        url: '/projects'
      },
      dlog: {
        title: 'D.Log',
        url: '/dlog'
      },
      copyright: 'Copyright © Yeonju Lee All Rights Reserved.',
      designed: 'Designed by Yeonju Lee.'
    }
  }
})
</script>
