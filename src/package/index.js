import VueStable from './VueStable/index.vue'

const coms = [VueStable]

const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com)
  })
}

export default install;