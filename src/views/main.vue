<template>
  <div class="Main">
    <Menu />
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
import Menu from '@/components/menu.vue'
import Footer from '@/components/footer.vue'

export default defineComponent({
  name: 'Main',
  components: {
    MainIntro, Resume, Skills, Reference, Contact, Menu, Footer
  },
  data () {
    return {
    }
  }
})
</script>
