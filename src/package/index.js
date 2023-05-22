import SimpleTable from './SimpleTable/index.vue'

const coms = [SimpleTable]

const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com)
  })
}
export default install; 