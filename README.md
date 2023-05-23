# Vue Stable
用vue2实现的一个简洁清新的移动端表格。(A simple and fresh mobile form implemented with Vue.)
# 插件安装(Installation)
包管理工具安装
```
pnpm install vue-stable

# or

npm install vue-stable

```
或者直接拷贝 `根目录/vue-stable/vue-stable.umd.min.js` 文件到你的目录，然后再引入

```javascript
<script src="xxx/vue-stable.umd.min.js"></script>
```

# 使用(Usage)

* 在项目的入口文件加入一下代码
```javascript
// 导入 VueStable 组件
import VueStable from "vue-stable"
// 使用 组件
Vue.use(VueStable);
```
* 在业务代码中使用，添加以下代码
```vue
<template>
  <vue-stable
    :data="tableData"
    :cols="cols"
    :cellStyle="cellStyle"
    @click-cell="handleClickCell"
    :loading="loading"
    :finished="finished"
  >
  </vue-stable>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tableData: [
        {
          name: "andy",
          age: 18,
          sex: "man",
          job: "Front-end engineer啥地方撒",
        },
        {
          name: "小妖精",
          age: 100,
          sex: "woman",
          job: "妖怪",
        },
        {
          name: "光头强",
          age: 36,
          sex: "man",
          job: "伐木工",
        },
      ],
      cols: [
        { field: "name", title: "姓名", width: "25%" },
        { field: "age", title: "年龄", width: "25%" },
        { field: "sex", title: "性别", width: "25%" },
        { field: "job", title: "职业", width: "25%" },
      ],
      cellStyle: { color: "#3D404D", "font-size": "14px" },
      headerCellStyle: {
        color: "#696893",
        "font-size": "12px",
      },
      loading: false,
      finished: false,
    };
  },
  methods: {
    handleClickCell(value, col, colIndex, rowIndex) {
      console.log(value, col, colIndex, rowIndex);
    },
  },
};
</script>

```

# 参数说明（Documentation）

