<template>
  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'index'
})
</script>

<style lang="scss">
  .route-enter-from {
    opacity: 0;
    transition: 1s ease-in;
  }
  .route-enter-active {
    transition: all .8s ease-out;
  }
  .route-leave-to {
    opacity: 0;
  }
  .route-enter-active {
    transition: all .8s ease-in;
  }
</style>
