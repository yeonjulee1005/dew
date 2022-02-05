<template>
  <div class="NotFound">
    <div class="desc">
      <h1>Not Found</h1>
      <p>
        페이지를 찾을 수가 없어요!<br>
      </p>
      <router-link to="/" @click="removeHiddenClass">Home</router-link>
    </div>
    <div class="page404">
      404
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted () {
    this.addHiddenClass()
  },
  methods: {
    addHiddenClass () {
      console.log(this.$refs.navigation)
      // document.getElementById('nav').classList.add('hidden-nav')
    },
    removeHiddenClass () {
      // document.getElementById('nav')?.classList.remove('hidden-nav')
    }
  }
})
</script>
