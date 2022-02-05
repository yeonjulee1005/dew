<template>
  <div class="skill-image">
    <img :class="css.title" :src="css.img" />
    <img :class="html.title" :src="html.img" />
    <img :class="github.title" :src="github.img" />
    <img :class="node.title" :src="node.img" />
    <img :class="illustration.title" :src="illustration.img" />
    <img :class="xd.title" :src="xd.img" />
    <img :class="javascript.title" :src="javascript.img" />
    <img :class="typescript.title" :src="typescript.img" />
    <img :class="nuxt.title" :src="nuxt.img" />
    <img :class="pgadmin.title" :src="pgadmin.img" />
    <img :class="postman.title" :src="postman.img" />
    <img :class="python.title" :src="python.img" />
    <img :class="sass.title" :src="sass.img" />
    <img :class="vim.title" :src="vim.img" />
    <img :class="vscode.title" :src="vscode.img" />
    <img :class="vue.title" :src="vue.img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      css: {
        title: 'css3',
        img: require('@/assets/img/logos/css3.png')
      },
      html: {
        title: 'html5',
        img: require('@/assets/img/logos/html5.png')
      },
      github: {
        title: 'github',
        img: require('@/assets/img/logos/github.png')
      },
      node: {
        title: 'node',
        img: require('@/assets/img/logos/node.png')
      },
      illustration: {
        title: 'illustration',
        img: require('@/assets/img/logos/illustration.png')
      },
      xd: {
        title: 'xd',
        img: require('@/assets/img/logos/xd.png')
      },
      javascript: {
        title: 'javascript',
        img: require('@/assets/img/logos/JavaScript.png')
      },
      typescript: {
        title: 'typescript',
        img: require('@/assets/img/logos/TypeScript.png')
      },
      nuxt: {
        title: 'nuxt',
        img: require('@/assets/img/logos/nuxt.png')
      },
      pgadmin: {
        title: 'pgadmin',
        img: require('@/assets/img/logos/pgadmin.png')
      },
      postman: {
        title: 'postman',
        img: require('@/assets/img/logos/postman.png')
      },
      python: {
        title: 'python',
        img: require('@/assets/img/logos/python.png')
      },
      sass: {
        title: 'sass',
        img: require('@/assets/img/logos/sass.png')
      },
      vim: {
        title: 'vim',
        img: require('@/assets/img/logos/vim.png')
      },
      vscode: {
        title: 'vscode',
        img: require('@/assets/img/logos/vscode.png')
      },
      vue: {
        title: 'vue',
        img: require('@/assets/img/logos/vue.png')
      }
    }
  }
})

</script>
