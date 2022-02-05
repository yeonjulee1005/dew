<template>
  <div class="header flex z-100" id="nav">
    <div class="flex logo">
      <router-link to="/">
        <img class="logo-img" :src="logo.img" :alt="logo.alt">
      </router-link>
    </div>
    <div class="desktop-menu flex">
      <router-link class="menu-text" :to="projects.url">{{ projects.name }}</router-link>
      <router-link class="menu-text ml-50" :to="dlogs.url">{{ dlogs.name }}</router-link>
    </div>
    <div class="mobile-menu">
      <el-menu background-color="transparent">
        <el-sub-menu index="1">
          <template #title>
            <el-icon class="fas fa-bars" :size="40"></el-icon>
          </template>
          <el-menu-item index="1-1">
            <router-link class="menu-text" :to="projects.url">{{ projects.name }}</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link class="menu-text" :to="dlogs.url">{{ dlogs.name }}</router-link>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
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
  name: 'index',
  data () {
    return {
      logo: {
        img: require('./assets/img/dewdew_logo.png'),
        alt: 'logo'
      },
      projects: { name: 'Projects' ,url: '/projects' },
      dlogs : { name: 'D. Log', url: '/dLog' }
    }
  }
});

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