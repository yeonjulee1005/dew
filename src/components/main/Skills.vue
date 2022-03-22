<template>
  <el-col :span="6" class="flex skills-intro flex-column">
    <SkillDescription />
    <SkillImage />
  </el-col>
  <el-col :span="10" class="flex flex-column skill-list">
    <el-row class="flex flex-column frontend-list">
      <div class="flex frontend-text">
        {{ frontEnd.title }}
      </div>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.html }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#c5e384"
          :indeterminate="true"
          :duration="6"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.css }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#ebc2af"
          :indeterminate="true"
          :duration="10"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.sass }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="80"
          color="#fce883"
          :indeterminate="true"
          :duration="7"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px;">
            {{ percent.ninety}}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.javascript }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="90"
          color="#a0e6ff"
          :indeterminate="true"
          :duration="8"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px;">
            {{ percent.eighty }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.typescript }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="75"
          color="#56887d"
          :indeterminate="true"
          :duration="5"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.seventyHalf }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.vue }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="80"
          color="#89729e"
          :indeterminate="true"
          :duration="11"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.seventy }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.nuxt }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="90"
          color="#a2add0"
          :indeterminate="true"
          :duration="8"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.seventy }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ frontEnd.flutter }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="90"
          color="#b56c60"
          :indeterminate="true"
          :duration="8"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.forty }}
          </span>
        </el-progress>
      </el-row>
    </el-row>
    <el-row class="flex flex-column backend-list">
      <div class="flex backend-text">
        {{ backEnd.title }}
      </div>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ backEnd.node }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="70"
          color="#bfc0ee"
          :indeterminate="true"
          :duration="7"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.seventy }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ backEnd.postgre }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#ffa089"
          :indeterminate="true"
          :duration="8"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.seventy }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ backEnd.python }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="80"
          color="#7b1113"
          :indeterminate="true"
          :duration="10"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.forty }}
          </span>
        </el-progress>
      </el-row>
    </el-row>
    <el-row class="flex flex-column tools-list">
      <div class="flex tools-text">
        {{ tools.title }}
      </div>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.vscode }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#ffddca"
          :indeterminate="true"
          :duration="7"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.vim }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="95"
          color="#4166f5"
          :indeterminate="true"
          :duration="10"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.ninetyHalf }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.github }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#fc6c85"
          :indeterminate="true"
          :duration="5"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.jira }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#ffb300"
          :indeterminate="true"
          :duration="11"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.bitbucket }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#8878c3"
          :indeterminate="true"
          :duration="6"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.sourcetree }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#a0d6b4"
          :indeterminate="true"
          :duration="11"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.hundred }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.postman }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="100"
          color="#0073cf"
          :indeterminate="true"
          :duration="5"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.eighty }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.illustration }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="80"
          color="#808080"
          :indeterminate="true"
          :duration="5"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.eighty }}
          </span>
        </el-progress>
      </el-row>
      <el-row class="flex-align-center">
        <span class="skills-text">
          {{ tools.xd }}
        </span>
        <el-progress
          :text-inside="true"
          :stroke-width="23"
          :percentage="90"
          color="#deaa88"
          :indeterminate="true"
          :duration="7"
          class="progress"
          style="width: 400px;"
        >
          <span style="font-size: 20px; margin-right: 120px; color: #f5f3ef;">
            {{ percent.ninety }}
          </span>
        </el-progress>
      </el-row>
    </el-row>
  </el-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkillImage from '@/components/atom/skill-image.vue'
import SkillDescription from '@/components/atom/skill-description.vue'

export default defineComponent({
  components: { SkillImage, SkillDescription },
  data () {
    return {
      frontEnd: {
        title: 'FE Skills',
        html: 'HTML5',
        css: 'CSS3',
        sass: 'SASS & SCSS',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        vue: 'Vue 2 & 3',
        nuxt: 'Nuxt',
        flutter: 'Flutter'
      },
      backEnd: {
        title: 'BE Skills',
        node: 'Node.js',
        postgre: 'PostgreSQL',
        python: 'Python'
      },
      tools: {
        title: 'Tools',
        vscode: 'VS Code',
        vim: 'vim',
        github: 'GitHub',
        jira: 'Jira',
        bitbucket: 'Bitbucket',
        sourcetree: 'Sourcetree',
        postman: 'Postman',
        illustration: 'Illustration',
        xd: 'XD'
      },
      percent: {
        forty: '⚙️ 40%',
        fifty: '⚙️ 50%',
        fiftyHalf: '⚙️ 55%',
        sixty: '⚙️ 60%',
        sixtyHalf: '⚙️ 65%',
        seventy: '⚙️ 70%',
        seventyHalf: '⚙️ 75%',
        eighty: '⚙️ 80%',
        eightyHalf: '⚙️ 85%',
        ninety: '⚙️ 90%',
        ninetyHalf: '⚙️ 95%',
        hundred: '⚙️ 100%'
      }
    }
  }
})

</script>
