<template>
  <div
    class="skill-image"
    v-for="image in imageData"
    :key="image.index"
  >
    <el-image :class="image.title" :src="image.img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      imageData: [
        {
          title: 'css3',
          img: require('@/assets/img/logos/css3.png')
        },
        {
          title: 'html5',
          img: require('@/assets/img/logos/html5.png')
        },
        {
          title: 'github',
          img: require('@/assets/img/logos/github.png')
        },
        {
          title: 'node',
          img: require('@/assets/img/logos/node.png')
        },
        {
          title: 'illustration',
          img: require('@/assets/img/logos/illustration.png')
        },
        {
          title: 'xd',
          img: require('@/assets/img/logos/xd.png')
        },
        {
          title: 'javascript',
          img: require('@/assets/img/logos/JavaScript.png')
        },
        {
          title: 'typescript',
          img: require('@/assets/img/logos/TypeScript.png')
        },
        {
          title: 'nuxt',
          img: require('@/assets/img/logos/nuxt.png')
        },
        {
          title: 'pgadmin',
          img: require('@/assets/img/logos/pgadmin.png')
        },
        {
          title: 'postman',
          img: require('@/assets/img/logos/postman.png')
        },
        {
          title: 'python',
          img: require('@/assets/img/logos/python.png')
        },
        {
          title: 'sass',
          img: require('@/assets/img/logos/sass.png')
        },
        {
          title: 'vim',
          img: require('@/assets/img/logos/vim.png')
        },
        {
          title: 'vscode',
          img: require('@/assets/img/logos/vscode.png')
        },
        {
          title: 'vue',
          img: require('@/assets/img/logos/vue.png')
        }
      ]
    }
  }
})

</script>
