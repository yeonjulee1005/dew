<template>
  <div class="resume-container flex">
    <div class="flex resume-contents">
      <div class="flex flex-align-center intro-img">
        <img :src="resumeImg">
      </div>
    </div>
    <div class="flex flex-column resume-detail">
      <div class="flex flex-column resume-inner">
        <div class="flex career">
          {{ career.title }}
        </div>
        <el-row class="flex resume-list flex-column career-detail mt-20">
          <el-row>
            <span class="bold mb-20">{{ career.desc }}</span>
          </el-row>
          <el-row v-for="item in careerData" :key="item.index">
            <el-col align="right" :span="8" class="bold pr-30">
              {{ item.title }}
            </el-col>
            <el-col :span="16">
              {{ item.desc}}
            </el-col>
          </el-row>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      resumeImg: require('@/assets/img/resume_img.jpg'),
      career: {
        title: '경력사항',
        desc: '경희대학교 서울캠퍼스 물리학과 졸업 (' + '\'' + '06)'
      },
      careerData: [
        {
          title: '터치웰',
          desc: '🖋️ 증착장비 임베디드 소프트웨어 개발참여'
        },
        {
          title: 'BEGA',
          desc: '🖋️️ 사내 웹페이지 유지보수, 플라즈마 소프트웨어 개발참여'
        },
        {
          title: '인베니아',
          desc: '🖋️️ 사내 웹페이지 유지보수, Inspector 시스템 개발참여'
        },
        {
          title: '키디자인',
          desc: '🖋️️ 자사몰 개발 및 유지보수 담당'
        },
        {
          title: '비트로드',
          desc: '🖋️️ 자사 사이트,자사몰 퍼블리싱 및 유지보수 담당'
        },
        {
          title: 'Avrosoft Korea',
          desc: '🖋️️ FE프로젝트 개발담당(Nuxt.js) 및 Sub BE, UI개발'
        },
        {
          title: '가제트코리아 주식회사',
          desc: '🖋️️ 유심사 사용자페이지 FE 개발총괄(Nuxt.js)'
        }
      ]
    }
  }
})
</script>
