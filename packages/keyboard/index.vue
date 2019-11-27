<template>
  <div class="vue-akeyboard"
       :class="className">
    <div id="vue-akeyboard"></div>
  </div>
</template>

<script>
import Keyboard from './keyboard'
import NumberKeyboard from './number'
import MobileKeyBoard from './mobile'

export default {
  name: 'vue-akeyboard',
  props: {
    ele: {
      type: String,
      required: true
    },
    keys: Array,
    theme: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'dark', 'green', 'classic'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'number', 'mobile'].includes(value)
      }
    },
    fixedBottomCenter: {
      type: Boolean,
      default: false
    },
    rebind: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className () {
      return `vue-akeyboard--${this.theme}`
    }
  },
  watch: {
    ele () {
      this.init()
    }
  },
  data () {
    return {
      customClick: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (!this.ele) return
      let keyboard
      const config = {
        el: '#vue-akeyboard',
        style: {},
        keys: this.keys,
        fixedBottomCenter: this.fixedBottomCenter
      }
      if (this.type == 'default') keyboard = new Keyboard(config)
      else if (this.type == 'number') keyboard = new NumberKeyboard(config)
      else if (this.type == 'mobile') keyboard = new MobileKeyBoard(config)

      const ele = this.ele.indexOf("#") == 0 ? this.ele.substring(1) : this.ele
      keyboard.inputOn(`#${ele}`, 'value', (e, val) => {
        this.$emit('click', e, val)
      }, this.rebind ? this.customClick : null)

      this.keyboard = keyboard
    },
    bindClick (btn, fn) {
      this.keyboard.onclick(btn, fn)
      this.customClick[btn] = fn
    }
  }
}
</script>
<style lang="scss">
@import "../styles/index.scss";
</style>
