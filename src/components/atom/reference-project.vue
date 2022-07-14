<template>
  <el-row class="flex-column flex-align-center">
    <div class="reference-item cursor">
      <el-image
        :src="referenceData.img"
        :alt="referenceData.title"
        @click="onClickImage(referenceData.alt)"
      />
    </div>
    <div class="item-text">
      {{ referenceData.title }}
    </div>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    referenceData: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    onClickImage (val: any) {
      this.$emit('click', val)
    }
  }
})
</script>
