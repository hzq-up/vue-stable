import SimpleTable from './SimpleTable/index.vue'

const coms = [SimpleTable]

export function install(Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com)
  })
}

export * from './SimpleTable/index.vue'