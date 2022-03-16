<template>
  <div class="flex flex-column reference-section">
    <div class="flex flex-column">
      <div class="section-title ml-50">
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
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.avrosoft.img"
              :alt="items.avrosoft.title"
              @click="onClickDialog(this.items.avrosoft.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.avrosoft.title }}
          </div>
        </el-row>
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.doowon.img"
              :alt="items.doowon.title"
              @click="onClickDialog(this.items.doowon.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.doowon.title }}
          </div>
          </el-row>
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.labor.img"
              :alt="items.labor.title"
              @click="onClickDialog(this.items.labor.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.labor.title }}
          </div>
          </el-row>
      </el-col>
      <el-col :span="8" class="reference-column">
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.invenia.img"
              :alt="items.invenia.title"
              @click="onClickDialog(this.items.invenia.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.invenia.title }}
          </div>
        </el-row>
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.orijen.img"
              :alt="items.orijen.title"
              @click="onClickDialog(this.items.orijen.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.orijen.title }}
          </div>
        </el-row>
      </el-col>
      <el-col :span="8" class="reference-column">
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.wuzo.img"
              :alt="items.wuzo.title"
              @click="onClickDialog(this.items.wuzo.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.wuzo.title }}
          </div>
        </el-row>
        <el-row class="flex-column flex-align-center">
          <div class="reference-item cursor">
            <img
              :src="items.bega.img"
              :alt="items.bega.title"
              @click="onClickDialog(this.items.bega.alt)"
            >
          </div>
          <div class="item-text">
            {{ items.bega.title }}
          </div>
        </el-row>
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
      <div
        v-for="(item, keys) in dialogItems"
        :key="keys"
        class=" dialog-images flex flex-justify-center flex-column"
      >
        <div
          class="dialog-title ml-30"
          style="font-size: 1.5em; font-weight: 700;"
        >
          {{ item.title }}
        </div>
        <div
          class="dialog-desc ml-30 mt-20 mb-20"
          style="font-size: 1.2em;"
        >
          {{ item.desc }}
        </div>
        <img
          class="dialog-image cursor"
          :src="item.img"
          style="width:90vw;"
          @click="openReference(item.url)"
        />
      </div>
    </div>
  </GDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Reference',
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
      items: {
        avrosoft: {
          title: '아브로소프트코리아',
          img: require('@/assets/img/references/avrosoft.png'),
          alt: 'avro'
        },
        doowon: {
          title: '두원실업',
          img: require('@/assets/img/references/doowon.png'),
          alt: 'doowon'
        },
        invenia: {
          title: '인베니아',
          img: require('@/assets/img/references/invenia.png'),
          alt: 'invenia'
        },
        orijen: {
          title: '오리젠',
          img: require('@/assets/img/references/orijen.png'),
          alt: 'orijen'
        },
        wuzo: {
          title: '우조',
          img: require('@/assets/img/references/wuzo.png'),
          alt: 'wuzo'
        },
        bega: {
          title: '베가',
          img: require('@/assets/img/references/bega.png'),
          alt: 'bega'
        },
        labor: {
          title: '노무인사관리플랫폼 사용자페이지',
          img: require('@/assets/img/references/labor.jpg'),
          alt: 'labor'
        }
      },
      referenceLists: '',
      dialogItems: Array<{title: string, desc: string, url: string, img: string}>()
    }
  },
  methods: {
    onClickDialog (val: string) {
      this.dialogState = true
      this.referenceLists = val
      switch (val) {
        case 'avro':
          this.dialogItems = []
          this.dialogItems.push({
            title: '아브로소프트코리아',
            desc: `${'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.'}`,
            url: 'http://avrosoft.co.kr',
            img: require('@/assets/img/references/details/avrosoft-detail.jpg')
          })
          break
        case 'doowon':
          this.dialogItems = []
          this.dialogItems.push({
            title: '두원실업',
            desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
            url: 'https://www.doowonpet.co.kr/',
            img: require('@/assets/img/references/details/doowon-detail.jpg')
          })
          break
        case 'invenia':
          this.dialogItems = []
          this.dialogItems.push({
            title: '인베니아',
            desc: '자사 래거시 사이트 유지보수 입니다.',
            url: 'https://www.inveniacorp.com/',
            img: require('@/assets/img/references/details/invenia-detail.jpg')
          })
          break
        case 'orijen':
          this.dialogItems = []
          this.dialogItems.push({
            title: '오리젠코리아',
            desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
            url: 'http://orijen.co.kr/',
            img: require('@/assets/img/references/details/orijen-detail.jpg')
          })
          break
        case 'wuzo':
          this.dialogItems = []
          this.dialogItems.push({
            title: '우조엔터테인먼트',
            desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
            url: 'http://www.wuzo.co.kr/',
            img: require('@/assets/img/references/details/wuzo-detail.jpg')
          })
          break
        case 'bega':
          this.dialogItems = []
          this.dialogItems.push({
            title: '배가',
            desc: 'PHP와 자바스크립트 기반의 반응형 웹페이지 입니다.',
            url: 'http://www.begatek.com/',
            img: require('@/assets/img/references/details/bega-detail.jpg')
          })
          break
        case 'labor':
          this.dialogItems = []
          this.dialogItems.push({
            title: '노무인사관리플랫폼',
            desc: 'Nuxt,Node.js를 이용한 클라우드기반 노무인사관리플랫폼의 홍보페이지 및 사용자페이지 입니다.',
            url: 'http://pay.avrosoft.co.kr/',
            img: require('@/assets/img/references/details/labor-detail.jpg')
          })
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
