# 简介

本项目是一个vue虚拟键盘项目，基于<a href="https://github.com/18510047382/A-Keyboard">akeyboard</a>改造，修改了部分样式，并支持自定义键盘。

# 安装

## 组件

```sh
$ npm i vue-akeyboard
或
$ yarn add vue-akeyboard
```

## 源码

<a href="https://github.com/sscfaith/vue-akeyboard" target="_blank">github</a>

```sh
$ yarn
$ yarn serve
```

# 使用

main.js
```js
import VueAkeyboard from 'vue-akeyboard'
Vue.use(VueAkeyboard)
```

vue
```html
<template>
  <div>
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
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ------ | ------ | ------ | ------ | ----- |
| ele | 输入框的id | String | 无 | - |
| keys | 自定义按键 | Array | 无 | - |
| theme | 主题 | String | 'default' | default/dark/green/classic |
| type | 类型 | String | 'default' | default/number/mobile |
| fixed-bottom-center | 固定在底部中间 | Boolean | false | true/false |
| rebind | 更换输入框时是否重新绑定之前的自定义按钮点击事件 | Boolean | true | true/false

### keys不传时为默认全键盘，内置按键
default：| Shift | Caps | Delete | Enter | Space | Tab | <br>
mobile：| ⇧ | ⇦ | Enter | Space | <br>
number：| Delete | Enter |

## 事件

| 名称 | 说明 | 回调参数 |
| ------ | ------ | ------ |
| click | 键盘点击回调 | (key, val) 点击的按键,键盘总值 |

## 方法

| 名称 | 说明 | 参数 |
| ------ | ------ | ------ |
| bindClick | 绑定自定义按键的点击事件 | (btn, fn) 按钮名称,回调函数 |

# 打包

## 组件

```sh
$ yarn lib
```

## 源码

```sh
$ yarn build
```

# 捐赠
如果你觉得本项目帮助到你的话，可以给作者买杯咖啡。
<img src="http://112.74.43.150/images/donate.png">

# License

<a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
