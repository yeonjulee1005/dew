<template>
  <el-col :span="6" class="flex skills-intro flex-column">
    <SkillDescription />
    <SkillImage />
  </el-col>
  <el-col :span="10" class="flex flex-column skill-list">
    <el-row class="flex flex-column frontend-list">
      <div class="flex frontend-text">
        {{ frontEndTitle }}
      </div>
      <div
        v-for="item in frontEndData"
        :key="item.index"
      >
        <SkillProgress :progress-bar-data="item" />
      </div>
    </el-row>
    <el-row class="flex flex-column backend-list">
      <div class="flex backend-text">
        {{ backEndTitle }}
      </div>
      <div
        v-for="item in backEndData"
        :key="item.index"
      >
        <SkillProgress :progress-bar-data="item" />
      </div>
    </el-row>
    <el-row class="flex flex-column tools-list">
      <div class="flex tools-text">
        {{ toolsTitle }}
      </div>
      <div
        v-for="item in toolsData"
        :key="item.index"
      >
        <SkillProgress :progress-bar-data="item" />
      </div>
    </el-row>
  </el-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkillImage from '@/components/atom/skill-image.vue'
import SkillDescription from '@/components/atom/skill-description.vue'
import SkillProgress from '@/components/atom/skill-progress.vue'

export default defineComponent({
  components: {
    SkillImage,
    SkillDescription,
    SkillProgress
  },
  data () {
    return {
      frontEndTitle: 'FE Skills',
      backEndTitle: 'BE Skills',
      toolsTitle: 'Tools',
      frontEndData: [
        { title: 'HTML5', duration: 6, percent: 100, percentText: '⚙️ 100%', color: '#c5e384', style: 'font-size: 20px; margin-right: 120px;' },
        { title: 'CSS3', duration: 10, percent: 100, percentText: '⚙️ 100%', color: '#ebc2af', style: 'font-size: 20px; margin-right: 120px;' },
        { title: 'SASS/SCSS', duration: 7, percent: 90, percentText: '⚙️ 90%', color: '#fce883', style: 'font-size: 20px; margin-right: 120px;' },
        { title: 'JavaScript', duration: 8, percent: 80, percentText: '⚙️ 80%', color: '#a0e6ff', style: 'font-size: 20px; margin-right: 120px;' },
        { title: 'TypeScript', duration: 5, percent: 65, percentText: '⚙️ 65%', color: '#56887d', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Vue.js', duration: 11, percent: 85, percentText: '⚙️ 85%', color: '#89729e', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Nuxt.js', duration: 8, percent: 90, percentText: '⚙️ 90%', color: '#a2add0', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Flutter', duration: 6, percent: 40, percentText: '⚙️ 40%', color: '#b56c60', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' }
      ],
      backEndData: [
        { title: 'Node.js', duration: 7, percent: 60, percentText: '⚙️ 60%', color: '#bfc0ee', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'PostgreSQL', duration: 8, percent: 70, percentText: '⚙️ 70%', color: '#ffa089', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Python', duration: 10, percent: 60, percentText: '⚙️ 60%', color: '#7b1113', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' }
      ],
      toolsData: [
        { title: 'VS Code', duration: 7, percent: 100, percentText: '⚙️ 100%', color: '#ffddca', style: 'font-size: 20px; margin-right: 120px;' },
        { title: 'Vim', duration: 10, percent: 95, percentText: '⚙️ 95%', color: '#4166f5', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'GitHub', duration: 5, percent: 100, percentText: '⚙️ 100%', color: '#fc6c85', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Jira', duration: 11, percent: 100, percentText: '⚙️ 100%', color: '#ffb300', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Azure', duration: 6, percent: 85, percentText: '⚙️ 85%', color: '#8878c3', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Firebase', duration: 11, percent: 80, percentText: '⚙️ 80%', color: '#a0d6b4', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Postman', duration: 5, percent: 90, percentText: '⚙️ 90%', color: '#0073cf', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Illustration', duration: 7, percent: 100, percentText: '⚙️ 100%', color: '#808080', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'XD', duration: 10, percent: 100, percentText: '⚙️ 100%', color: '#deaa88', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' },
        { title: 'Zeplin', duration: 6, percent: 100, percentText: '⚙️ 100%', color: '#ffa089', style: 'font-size: 20px; margin-right: 120px; color: #f5f3ef;' }
      ]
    }
  }
})

</script>
