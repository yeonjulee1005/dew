<template>
  <div class="flex flex-column contact-section">
    <el-row class="flex-justify-center mb-50 contact-title">
      {{ title }}
    </el-row>
    <el-row class="flex flex-row contact-list">
      <div class="flex flex-column kakaotalk">
        <div class="kakaotalk-title">
          {{ kakaotalk.title }}
        </div>
        <div class="kakaotalk-image">
          <a :href="kakaotalk.link" target="parent">
            <img :src="kakaotalk.img">
          </a>
        </div>
        <div class="kakaotalk-desc">
          {{ kakaotalk.desc }}
        </div>
      </div>
      <div class="contact-email">
        <div class="email-title mb-50">
          {{ email }}
        </div>
        <ContactForm />
      </div>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from '@/components/atom/contactForm.vue'

export default defineComponent({
  name: 'Contact',
  components: { ContactForm },
  data () {
    return {
      title: 'CONTACT',
      kakaotalk: {
        title: 'Kakao Talk',
        link: 'https://namecard.kakao.com/dewdew',
        img: require('../../assets/img/kakao_medium.png'),
        desc: '카카오톡으로 연락하기'
      },
      email: 'E-Mail'
    }
  }
})
</script>
