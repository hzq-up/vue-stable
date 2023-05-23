<template>
  <div id="app">
    <vue-stable :data="tableData" :cols="cols" :cellStyle="cellStyle" :headerCellStyle="headerCellStyle"
      @click-cell="handleClickCell" :loading="loading" :finished="finished">
    </vue-stable>
  </div>
</template>

<script>
import VueStable from './package/VueStable/index.vue'
export default {
  name: 'App',
  components: {
    VueStable
  },
  data() {
    return {

      tableData: [
        {
          name: 'andy',
          age: 18,
          sex: '男',
          job: '前端工程师'
        },
        {
          name: 'andy',
          age: 18,
          sex: '男',
          job: '前端工程师'
        },
        {
          name: 'andy',
          age: 18,
          sex: '男',
          job: '前端工程师'
        },
      ],
      cols: [
        { field: 'name', title: '姓名', width: '25%' },
        { field: 'age', title: '年龄', width: '25%' },
        { field: 'sex', title: '性别', width: '25%' },
        { field: 'job', title: '职业', width: '25%' },
      ],
      cellStyle: { color: '#3D404D', 'font-size': '12px' },
      headerCellStyle: { color: '#696893', 'font-size': '14px', 'text-align': 'center' },
      loading: false,
      finished: false
    }
  },
  methods: {
    handleClickCell(value, col, colIndex, rowIndex) {
      console.log(value, col, colIndex, rowIndex)
    },
  },
}
</script>