<template>
  <span
    v-for="(item, index) in title"
    :key="index"
    class="skills-text">
    {{ item.msg }}
  </span>
  <span
    v-for="(item, index) in desc1"
    :key="index"
    class="skills-text"
  >
    {{ item.msg }}
  </span>
  <span
    v-for="(item, index) in desc2"
    :key="index"
    class="skills-text"
    >
    {{ item.msg }}
  </span>
  <div class="skills-title-box">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      title: [
        { msg: '안녕하세요.' },
        { msg: '개발자 이연주 입니다.' }
      ],
      desc1: [
        { msg: '비록 화려한 삶은 아니지만,' },
        { msg: '한번뿐인 인생에서 즐겁게 일하며 새로운 것들을' },
        { msg: '경험하고 성장하고 있는 개발자입니다.' }
      ],
      desc2: [
        { msg: '개발업무의 특성상, 매일마다 새로운 기술들이' },
        { msg: '나오고 있고, 이러한 최신기술을 배우고' },
        { msg: '사용할 수 있어야 한다고 생각합니다.' },
        { msg: '그렇기에 저는 당장 사용하는 기술이 아니어도,' },
        { msg: '많은 언어들을 바라보며 성장해 가고 있습니다.' }
      ]
    }
  }
})

</script>
