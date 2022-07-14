<template>
  <el-row class="flex-align-center">
    <span class="skills-text">
      {{ progressBarData.title }}
    </span>
    <el-progress
      :text-inside="true"
      :stroke-width="23"
      :percentage="progressBarData.percent"
      :color="progressBarData.color"
      :indeterminate="true"
      :duration="progressBarData.duration"
      class="progress"
      style="width: 400px;"
    >
      <span :style="progressBarData.style">
        {{ progressBarData.percentText }}
      </span>
    </el-progress>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    progressBarData: {
      type: Object,
      default: () => null
    }
  }
})

</script>
