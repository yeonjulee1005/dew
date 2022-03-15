<template>
  <div class="Main">
    <Menus />
    <el-row class="content">
      <MainIntro />
    </el-row>
    <el-row class="resume">
      <Resume />
    </el-row>
    <el-row class="skills">
      <Skills />
    </el-row>
    <el-row class="reference">
      <Reference />
    </el-row>
    <el-row class="contact">
      <Contact />
    </el-row>
    <el-backtop :bottom="60" :right="60" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainIntro from '@/components/main/MainIntro.vue' // @ is an alias to /src
import Resume from '@/components/main/Resume.vue'
import Skills from '@/components/main/Skills.vue'
import Reference from '@/components/main/Reference.vue'
import Contact from '@/components/main/contact.vue'
import Menus from '@/components/menus.vue'
import Footer from '@/components/footer.vue'

export default defineComponent({
  name: 'Main',
  components: {
    MainIntro, Resume, Skills, Reference, Contact, Menus, Footer
  },
  data () {
    return {
    }
  }
})
</script>

<style lang="scss">
  .el-backtop {
    width: 50px;
    height: 50px;
    color: #000;
    background-color: #fff;
    box-shadow: 3px 3px 10px #BABECC;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  .el-backtop:hover {
    background-color: #f0f8ff;
  }
</style>
