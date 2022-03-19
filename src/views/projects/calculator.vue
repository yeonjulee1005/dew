<template>
  <div>
    <Menus />
    <div class="calculator">
      <el-form
        class="modules flex flex-column flex-justify-center flex-align-center"
      >
        <el-form-item
          class="center"
        >
          <el-input
            class="input"
            v-model="calculateResult.value"
            :placeholder="calculatorTitle"
            readonly
            focus="false"
          />
        </el-form-item>
        <div class="button-group">
          <el-button
            class="clear"
            @click="clearClick"
          >
            {{ calculateProperties.cancel }}
          </el-button>
          <el-button
            class="operator"
            @click="addSign"
          >
            {{ calculateProperties.sign }}
          </el-button>
          <el-button
            class="operator"
            @click="operatorClick(calculateProperties.split)"
          >
            {{ calculateProperties.split }}
          </el-button>
          <el-button
            class="operator"
            @click="operatorClick(calculateProperties.divide)"
          >
            {{ calculateProperties.divide }}
          </el-button>
        </div>
        <div class="button-group">
          <el-button
            @click="numberClick(calculateProperties.seven)"
          >
            {{ calculateProperties.seven }}
          </el-button>
          <el-button
            @click="numberClick(calculateProperties.eight)"
          >
            {{ calculateProperties.eight }}
          </el-button>
          <el-button
            @click="numberClick(calculateProperties.nine)"
          >
            {{ calculateProperties.nine }}
          </el-button>
          <el-button
            class="operator"
            @click="operatorClick(calculateProperties.multi)"
          >
            {{ calculateProperties.multi }}
          </el-button>
        </div>
        <div class="button-group">
          <el-button
            @click="numberClick(calculateProperties.four)"
          >
            {{ calculateProperties.four }}
          </el-button>
          <el-button
            @click="numberClick(calculateProperties.five)"
          >
            {{ calculateProperties.five }}
          </el-button>
          <el-button
            @click="numberClick(calculateProperties.six)"
          >
            {{ calculateProperties.six }}
          </el-button>
          <el-button
            class="operator"
            @click="operatorClick(calculateProperties.minus)"
          >
            {{ calculateProperties.minus }}
          </el-button>
        </div>
        <div class="button-group">
          <el-button
            @click="numberClick(calculateProperties.one)"
          >
            {{ calculateProperties.one }}
          </el-button>
          <el-button
            @click="numberClick(calculateProperties.two)"
          >
            {{ calculateProperties.two }}
          </el-button>
          <el-button
            @click="numberClick(calculateProperties.three)"
          >
            {{ calculateProperties.three }}
          </el-button>
          <el-button
            class="operator"
            @click="operatorClick(calculateProperties.plus)"
          >
            {{ calculateProperties.plus }}
          </el-button>
        </div>
        <div class="button-group">
          <el-button
            @click="numberClick(calculateProperties.zero)"
          >
            {{ calculateProperties.zero }}
          </el-button>
          <el-button
            class="dot"
            @click="numberClick(calculateProperties.dot)"
          >
            {{ calculateProperties.dot }}
          </el-button>
          <el-button
            class="operator result"
            @click="submitClick(calculateProperties.enter)"
          >
            {{ calculateProperties.enter }}
          </el-button>
        </div>
      </el-form>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import Menus from '@/components/menus.vue'
import Footer from '@/components/footer.vue'

export default defineComponent({
  title: 'calculator',
  components: {
    Menus, Footer
  },
  data () {
    return {
      calculatorTitle: 'Calculate me!',
      calculateProperties: {
        cancel: 'AC',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        zero: '0',
        sign: '+/-',
        divide: '/',
        split: '%',
        multi: '*',
        plus: '+',
        minus: '-',
        dot: '.',
        enter: '='
      }
    }
  },
  setup () {
    let typing = { first: '', second: '' }
    let numberSaving = { first: 0, second: 0 }
    let operators = ''
    let sign = '+'

    const calculateResult = reactive({ value: '' })

    const numberClick = (val) => {
      if (!operators) {
        calculateResult.value = ''
        typing.first += val
        calculateResult.value = typing.first
      } else {
        calculateResult.value = ''
        typing.second += val
        calculateResult.value = typing.second
      }
    }
    const addSign = () => {
      if (!operators) {
        if (sign === '+') {
          typing.first = ('+' + typing.first.replaceAll('-', ''))
          calculateResult.value = typing.first
          sign = '-'
        } else {
          typing.first = ('-' + typing.first.replaceAll('+', ''))
          calculateResult.value = typing.first
          sign = '+'
        }
      } else if (operators && typing.second) {
        if (sign === '+') {
          typing.second = ('+' + typing.second.replaceAll('-', ''))
          calculateResult.value = typing.second
          sign = '-'
        } else {
          typing.second = ('-' + typing.second.replaceAll('+', ''))
          calculateResult.value = typing.second
          sign = '+'
        }
      }
    }
    const operatorClick = (val) => {
      operators = val
      switch (val) {
        case '+' :
          if (typing.first) {
            if (!numberSaving.first) {
              numberSaving.first = parseFloat(typing.first)
            } else {
              numberSaving.first += parseFloat(typing.first)
            }
          } else if (typing.second) {
            numberSaving.first += parseFloat(typing.second)
          } else {
            return
          }
          typing = { first: '', second: '' }
          calculateResult.value = parseFloat(numberSaving.first)
          break
        case '-' :
          if (typing.first) {
            if (!numberSaving.first) {
              numberSaving.first = parseFloat(typing.first)
            } else {
              numberSaving.first -= parseFloat(typing.first)
            }
          } else if (typing.second) {
            numberSaving.first -= parseFloat(typing.second)
          } else {
            return
          }
          typing = { first: '', second: '' }
          calculateResult.value = parseFloat(numberSaving.first)
          break
        case '*' :
          if (typing.first) {
            if (!numberSaving.first) {
              numberSaving.first = parseFloat(typing.first)
            } else {
              numberSaving.first *= parseFloat(typing.first)
            }
          } else if (typing.second) {
            numberSaving.first *= parseFloat(typing.second)
          } else {
            return
          }
          typing = { first: '', second: '' }
          calculateResult.value = parseFloat(numberSaving.first)
          break
        case '/' :
          if (typing.first) {
            if (!numberSaving.first) {
              numberSaving.first = parseFloat(typing.first)
            } else {
              numberSaving.first /= parseFloat(typing.first)
            }
          } else if (typing.second) {
            numberSaving.first /= parseFloat(typing.second)
          } else {
            return
          }
          typing = { first: '', second: '' }
          calculateResult.value = parseFloat(numberSaving.first)
          break
        case '%' :
          if (typing.first) {
            if (!numberSaving.first) {
              numberSaving.first = parseFloat(typing.first)
            } else {
              numberSaving.first %= parseFloat(typing.first)
            }
          } else if (typing.second) {
            numberSaving.first %= parseFloat(typing.second)
          } else {
            return
          }
          typing = { first: '', second: '' }
          calculateResult.value = parseFloat(numberSaving.first)
          break
      }
    }
    const submitClick = () => {
      let result = 0
      if (typing.second) {
        numberSaving.second += parseFloat(typing.second)
      }
      switch (operators) {
        case '+':
          result = numberSaving.first + numberSaving.second
          calculateResult.value = result
          numberSaving.first = result
          numberSaving.second = 0
          typing.first = ''
          typing.second = ''
          operators = ''
          break
        case '-':
          result = numberSaving.first - numberSaving.second
          calculateResult.value = result
          numberSaving.first = result
          numberSaving.second = 0
          typing.first = ''
          typing.second = ''
          operators = ''
          break
        case '*':
          result = numberSaving.first * numberSaving.second
          calculateResult.value = result
          numberSaving.first = result
          numberSaving.second = 0
          typing.first = ''
          typing.second = ''
          operators = ''
          break
        case '/':
          result = numberSaving.first / numberSaving.second
          calculateResult.value = result
          numberSaving.first = result
          numberSaving.second = 0
          typing.first = ''
          typing.second = ''
          operators = ''
          break
        case '%':
          result = numberSaving.first % numberSaving.second
          calculateResult.value = result
          numberSaving.first = result
          numberSaving.second = 0
          typing.first = ''
          typing.second = ''
          operators = ''
          break
      }
    }
    const clearClick = () => {
      typing = { first: '', second: '' }
      numberSaving = { first: 0, second: 0 }
      operators = ''
      calculateResult.value = ''
    }
    return { calculateResult, numberClick, addSign, operatorClick, submitClick, clearClick }
  }
})
</script>
