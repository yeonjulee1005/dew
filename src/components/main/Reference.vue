<template>
  <div class="flex flex-column reference-section">
    <div class="flex flex-column">
      <div class="section-title">
        {{ title.main }}
      </div>
      <div class="section-bg-text">
        {{ title.background }}
      </div>
      <div class="section-text">
        {{ title.desc }}
      </div>
    </div>
    <el-row class="reference-list">
      <el-col :span="8" class="reference-column">
        <div
          v-for="item in firstColumnItems"
          :key="item.index"
        >
          <ReferenceProject
            :reference-data="item"
            @click="onClickDialog"
          />
        </div>
      </el-col>
      <el-col :span="8" class="reference-column">
        <div
          v-for="item in secondColumnItems"
          :key="item.index"
        >
          <ReferenceProject
            :reference-data="item"
            @click="onClickDialog"
          />
        </div>
      </el-col>
      <el-col :span="8" class="reference-column">
        <div
          v-for="item in thirdColumnItems"
          :key="item.index"
        >
          <ReferenceProject
            :reference-data="item"
            @click="onClickDialog"
          />
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="reference-background" />
  <div class="reference-background" />
  <GDialog v-model="dialogState" height="90vh" width="90vw" transition="gdialog-transition" depressed>
    <div class="g-dialog flex flex-column">
      <div class="flex flex-justify-end mt-10 mr-10">
        <el-button round class="cursor" plain color="#bfc1c2" @click="dialogState = false">
          <el-icon class="fas fa-times" />
        </el-button>
      </div>
      <div class=" dialog-images flex flex-justify-center flex-column">
        <div
          class="dialog-title ml-30"
          style="font-size: 1.5em; font-weight: 700;"
        >
          {{ dialogItems.title }}
        </div>
        <div
          class="dialog-desc ml-30 mt-20 mb-20"
          style="font-size: 1.2em;"
        >
          {{ dialogItems.desc }}
        </div>
        <img
          class="dialog-image cursor"
          :src="dialogItems.img"
          style="width:90vw;"
          @click="openReference(dialogItems.url)"
        />
      </div>
    </div>
  </GDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ReferenceProject from '@/components/atom/reference-project.vue'

export default defineComponent({
  name: 'Reference',
  components: {
    ReferenceProject
  },
  setup () {
    const dialogState = ref(false)
    return {
      dialogState
    }
  },
  data () {
    return {
      title: {
        main: '프로젝트',
        background: 'PROJECTS',
        desc: '개발 및 유지보수를 진행한 대표사례 입니다.'
      },
      firstColumnItems: [
        {
          title: '유심사',
          desc: 'Nuxt.js 기반의 eSim 서비스 페이지 입니다. 해당 프로젝트는 FE 개발 총괄담당하여 개발하였습니다.',
          url: 'https://usimsa.com',
          dialogImg: require('@/assets/img/references/details/usimsa-detail.png'),
          img: require('@/assets/img/references/usimsa.png'),
          alt: 'usimsa'
        },
        {
          title: '두원실업',
          desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
          url: 'https://www.doowonpet.co.kr/',
          dialogImg: require('@/assets/img/references/details/doowon-detail.jpg'),
          img: require('@/assets/img/references/doowon.png'),
          alt: 'doowon'
        },
        {
          title: '노무인사관리플랫폼 사용자페이지',
          desc: 'Nuxt,Node.js를 이용한 클라우드기반 노무인사관리플랫폼의 홍보페이지 및 사용자페이지 입니다.',
          url: 'http://pay.avrosoft.co.kr/',
          dialogImg: require('@/assets/img/references/details/labor-detail.jpg'),
          img: require('@/assets/img/references/labor.jpg'),
          alt: 'labor'
        }
      ],
      secondColumnItems: [
        {
          title: '아브로소프트코리아',
          desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
          url: 'http://avrosoft.co.kr',
          dialogImg: require('@/assets/img/references/details/avrosoft-detail.jpg'),
          img: require('@/assets/img/references/avrosoft.png'),
          alt: 'avro'
        },
        {
          title: '인베니아',
          desc: '자사 래거시 사이트 유지보수 입니다.',
          url: 'https://www.inveniacorp.com/',
          dialogImg: require('@/assets/img/references/details/invenia-detail.jpg'),
          img: require('@/assets/img/references/invenia.png'),
          alt: 'invenia'
        },
        {
          title: '오리젠',
          desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
          url: 'http://orijen.co.kr/',
          dialogImg: require('@/assets/img/references/details/orijen-detail.jpg'),
          img: require('@/assets/img/references/orijen.png'),
          alt: 'orijen'
        }
      ],
      thirdColumnItems: [
        {
          title: '우조',
          desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
          url: 'http://www.wuzo.co.kr/',
          dialogImg: require('@/assets/img/references/details/wuzo-detail.jpg'),
          img: require('@/assets/img/references/wuzo.png'),
          alt: 'wuzo'
        },
        {
          title: '베가',
          desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
          url: 'http://www.begatek.com/',
          dialogImg: require('@/assets/img/references/details/bega-detail.jpg'),
          img: require('@/assets/img/references/bega.png'),
          alt: 'bega'
        }
      ],
      referenceLists: '',
      dialogItems: Object()
    }
  },
  methods: {
    onClickDialog (val: string) {
      this.dialogState = true
      this.referenceLists = val
      switch (val) {
        case 'usimsa' :
          this.dialogItems = {
            title: this.firstColumnItems[0].title,
            desc: this.firstColumnItems[0].desc,
            url: this.firstColumnItems[0].url,
            img: this.firstColumnItems[0].dialogImg
          }
          break
        case 'doowon' :
          this.dialogItems = {
            title: this.firstColumnItems[1].title,
            desc: this.firstColumnItems[1].desc,
            url: this.firstColumnItems[1].url,
            img: this.firstColumnItems[1].dialogImg
          }
          break
        case 'labor' :
          this.dialogItems = {
            title: this.firstColumnItems[2].title,
            desc: this.firstColumnItems[2].desc,
            url: this.firstColumnItems[2].url,
            img: this.firstColumnItems[2].dialogImg
          }
          break
        case 'avro' :
          this.dialogItems = {
            title: this.secondColumnItems[0].title,
            desc: this.secondColumnItems[0].desc,
            url: this.secondColumnItems[0].url,
            img: this.secondColumnItems[0].dialogImg
          }
          break
        case 'invenia' :
          this.dialogItems = {
            title: this.secondColumnItems[1].title,
            desc: this.secondColumnItems[1].desc,
            url: this.secondColumnItems[1].url,
            img: this.secondColumnItems[1].dialogImg
          }
          break
        case 'orijen' :
          this.dialogItems = {
            title: this.secondColumnItems[2].title,
            desc: this.secondColumnItems[2].desc,
            url: this.secondColumnItems[2].url,
            img: this.secondColumnItems[2].dialogImg
          }
          break
        case 'wuzo' :
          this.dialogItems = {
            title: this.thirdColumnItems[0].title,
            desc: this.thirdColumnItems[0].desc,
            url: this.thirdColumnItems[0].url,
            img: this.thirdColumnItems[0].dialogImg
          }
          break
        case 'bega' :
          this.dialogItems = {
            title: this.thirdColumnItems[1].title,
            desc: this.thirdColumnItems[1].desc,
            url: this.thirdColumnItems[1].url,
            img: this.thirdColumnItems[1].dialogImg
          }
          break
      }
    },
    openReference (url: string) {
      window.open(url)
    }
  }
})
</script>

<style lang="scss">
.g-dialog-transition {
  &-enter-active,
  &-leave-active {
    transition-timing-function: linear;
    transition-duration: 1s;
  }
  &-enter-from {
    transform: translate(0, -30px);
    opacity: 0;
    transition-duration: 1s;
  }

  &-leave-to {
    transform: translate(0, 30px);
    opacity: 0;
    transition-duration: 1s;
  }
}
.dialog-title {
  width: fit-content;
  font-size: 1.5em;
  font-weight: 700;
  margin: 10px 30px;
  padding: 0 20px 0 0;
  border-bottom: 1px solid #1b1811;
}
.dialog-desc {
  font-size: 1.2em;
  margin: 10px 30px;
}
</style>
