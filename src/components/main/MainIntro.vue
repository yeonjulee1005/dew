<template>
  <div>
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="main-title">
        {{ mainTitle }}
      </div>
    </transition>
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="main-text">
        {{ mainText_1 }}<br>
        {{ mainText_2}}<br>
        <span class="little-text">
          {{ notice }}
        </span>
      </div>
    </transition>
    <transition
      appear
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="scroll-down">
        {{ scroll_down }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineComponent({
  data () {
    return {
      mainTitle: 'FULL STACK DEVELOPER',
      mainText_1: '노력하는 사람은 즐기는 사람을 이길 수 없습니다.',
      mainText_2: '개발과 취미를 즐기며 살아가고 있는 개발자 이연주입니다.',
      notice: '본 페이지는' + ` '` + 'Vue 3' + ` & ` + 'TypeScript' + `'` + '으로 제작되었습니다.',
      scroll_down: '👇🏻Scroll Down'
    }
  },
  setup () {
    const beforeEnter = (element: any) => {
      //'before enter -set initial state
      switch (element) {
        case '.main-title' :
        case '.mail-text' :
          element.style.transform = 'translateY(-60px)'
          element.style.opacity = 0
          break
        case '.scroll-down' :
          break
      }
    }
    const enter = (element: any, done: any) => {
      //starting to enter make transition
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(".main-title", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-out',
        onComplete: done
      })
      gsap.to(".main-text", {
        delay: 0.5,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-out',
        onComplete: done
      })
      gsap.to(".scroll-down", {duration: 0.6, y:30, ease:"circ.in", repeat:-1, yoyo:true})
    }
    const afterEnter = (element: any) => {
      //after enter
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(".main-title", {
        duration: 0.5,
        y: 0,
        opacity: 0,
        ease: 'ease-out',
        scrollTrigger: {
          trigger: ".main-title",
          start: "top top",
          scrub: true,
          pin: true
        }
      })
      gsap.to(".main-text", {
        delay: 0.5,
        duration: 0.5,
        y: -60,
        opacity: 0,
        ease: 'ease-out',
        scrollTrigger: {
          trigger: ".main-text",
          endTrigger: ".main-text",
          start: "top 20%",
          end: "top 10%",
          scrub: true,
          pin: true
        }
      })
      gsap.to(".scroll-down", {
        duration: 0.8,
        lazy: false,
        y: 30,
        opacity: 0,
        ease:"ease-out",
        scrollTrigger: {
          trigger: ".scroll-down",
          endTrigger: '.scroll-down',
          start: "top 20%",
          end: "top 10%",
          scrub: true,
          pin: true
        }
      })
    }

    return { beforeEnter, enter, afterEnter }
  }
})
</script>
