<template>
    <div class="contact-form">
        <el-form @submit.prevent="sendEmail">
          <label>Name</label>
          <el-input 
            type="text" 
            v-model="items.name"
            name="name"
            placeholder="이름을 입력하세요."
          />
          <div v-for="(error, name) in items.errors" :key="name">
            <p v-if="error.name">
              {{ error.name }}
            </p>
          </div>
          <label>E-mail</label>
          <el-input 
            type="email" 
            v-model="items.email"
            name="email"
            placeholder="이메일을 입력하세요."
            />
          <div v-for="(error, name) in items.errors" :key="name">
            <p v-if="error.email">
              {{ error.email }}
            </p>
          </div>
          <label>Message</label>
          <textarea
            name="message"
            v-model="items.message"
            cols="30" rows="5"
            placeholder="메시지를 입력하세요.">
          </textarea>
          <div v-for="(error, name) in items.errors" :key="name">
            <p v-if="error.message">
              {{ error.message }}
            </p>
          </div>
          <input type="submit" value="Send" />
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'ContactUs',
  data () {
    return {
      items: {
        name: '',
        email: '',
        message: '',
        errors: [{}]
      }
    }
  },
  methods: {
    sendEmail (e: any) {
      this.items.errors = []
      if (!this.items.name) {
        this.items.errors.push({name: '이름을 입력해주세요!'})
      }
      if (!this.items.email) {
        this.items.errors.push({email: '메일을 입력해주세요!'})
      }
      if (!this.items.message) {
        this.items.errors.push({message: '메시지를 입력해주세요!'})
      } else if (!this.items.errors) {
        return true
      }
      if (!this.items.errors.length) {
        try {
          emailjs.sendForm('dewdew', 'template_y0g6908', e.target, 'user_wBo34NpBYOGr32Jd9YlZ8',
          )
          ElMessage({
            message: '이메일을 보내주셔서 감사합니다!:D',
            type: 'success'
          })
        } catch (error) {
          ElMessage({
            message: '이메일 발송에 실패하였습니다 T.T',
            type: 'error'
          })
            console.log({error})
        }
        // Reset form field
        this.items = {
          name: '',
          email: '',
          message: '',
          errors: [{}]
        }
      }
      e.preventDefault()
    }
  }
})
</script>