import keyboard from './keyboard'

export default {
  install (Vue) {
    Vue.component(keyboard.name, keyboard);
  }
}
