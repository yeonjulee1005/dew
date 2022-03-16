<template>
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
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ touchWell.title }}</el-col>
          <el-col :span="18">{{ touchWell.desc }}</el-col>
        </el-row>
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ bega.title }}</el-col>
          <el-col :span="18">{{ bega.desc }}</el-col>
        </el-row>
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ invenia.title }}</el-col>
          <el-col :span="18">{{ invenia.desc }}</el-col>
        </el-row>
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ keyDesign.title }}</el-col>
          <el-col :span="18">{{ keyDesign.desc }}</el-col>
        </el-row>
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ beatRoad.title }}</el-col>
          <el-col :span="18">{{ beatRoad.desc }}</el-col>
        </el-row>
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ dooWon.title }}</el-col>
          <el-col :span="18">
            <el-row>{{ dooWon.desc1 }}</el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col align="right" :span="6" class="bold pr-30">{{ avroSoft.title }}</el-col>
          <el-col :span="18">{{ avroSoft.desc }}</el-col>
        </el-row>
      </el-row>
    </div>
  </div>
  <div class="resume-background" />
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
      touchWell: {
        title: '터치웰',
        desc: '🖋️ 증착장비 임베디드 소프트웨어 개발참여'
      },
      bega: {
        title: 'BEGA',
        desc: '🖋️️ 사내 웹페이지 유지보수 및 플라즈마 장비 소프트웨어 개발참여'
      },
      invenia: {
        title: '인베니아',
        desc: '🖋️️ 사내 웹페이지 유지보수 및 Inspector 시스템 개발참여'
      },
      keyDesign: {
        title: '키디자인',
        desc: '🖋️️ 자사몰 개발 및 유지보수 담당'
      },
      beatRoad: {
        title: '비트로드',
        desc: '🖋️️ 자사 사이트,자사몰 퍼블리싱 및 유지보수 담당'
      },
      dooWon: {
        title: '두원실업',
        desc1: '🖋️️ 자사 사이트, 본사 웹페이지 한글화 및 레거시코드 유지보수 담당'
      },
      avroSoft: {
        title: 'Avrosoft Korea',
        desc: '🖋️️ Vue, Nuxt 기반 FE 웹개발 및 BE, UI Web Design 작업'
      }
    }
  }
}
)
</script>
