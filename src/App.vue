<template>
  <div id="app">
    <input id="text"
           v-model="text">
    <input id="text2"
           v-model="text2">
    <vue-akeyboard ref="kb"
                   :ele="ele"
                   :keys="keys"
                   @click="handleKeyboardClick"
                   style="width: 800px; height: 300px"></vue-akeyboard>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      keys: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['a', 'b', 'c', 'd', 'Shift', '清空']
      ],
      text: '',
      text2: '',
      ele: 'text'
    }
  },
  mounted () {
    // 自定义按键绑定click
    this.$refs.kb.bindClick("清空", () => {
      this[this.ele] = ''
    })

    // 模拟更换输入框
    setTimeout(() => {
      this.ele = "text2"
    }, 5000);
  },
  methods: {
    // 键盘点击
    handleKeyboardClick (key, val) {
      this[this.ele] = val
    }
  }
}
</script>
