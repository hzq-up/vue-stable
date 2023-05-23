# Vue Stable
用vue2实现的一个简洁清新的移动端表格。(A simple and fresh mobile form implemented with Vue.)
# 插件安装
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
    <vue-stable
      :data="tableData"
      :cols="cols"
      :cellStyle="cellStyle"
      :headerCellStyle="headerCellStyle"
      @click-cell="handleClickCell"
      :loading="loading"
      :finished="finished"
    >
    </vue-stable>
```