<template >
  <div class="table">
    <div class="table-thead" :style="{ ...headerCellStyle }">
      <div v-for="(col, index) in cols" :key="index" class="table-thead-tr"
        :style="{ width: col.width || 100 / cols.length + '%' }">
        {{ col.title }}
      </div>
    </div>
    <div class="table-body" v-if="data.length">
      <div class="table-body-container">
        <div class="table-body-row" :style="{ ...cellStyle }" v-for="(table, index) in data" :key="index">
          <div v-for="(col, i) in cols" :key="i" :style="{ width: col.width || 100 / cols.length + '%' }"
            class="table-body-row-cell" v-html="table[col.field]"
            @click="handleClickCell(table[col.field], table, i, index)"></div>
        </div>
      </div>
      <div v-if="loading && !finished" class="loading">加载中...</div>
      <div v-if="finished && !loading" class="finished">-&nbsp;没有更多数据了&nbsp;-</div>
    </div>
    <div class="table-body" v-else>
      <div class="nodata">
        <img class="nodata-icon"
          src="https://chaincar-cc.oss-cn-shenzhen.aliyuncs.com/xiaochengxu/common_no_data_icon.png" />
        <span class="nodata-text">暂无数据</span>
      </div>
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueStable",
  props: {
    headerCellStyle: {
      type: Object,
      default: () => ({})
    },
    cellStyle: {
      type: Object,
      default: () => ({})
    },
    cols: {
      required: true,
      type: Array,
    },
    data: {
      required: true,
      type: Array,
    },
    loading: {
      required: true,
      type: Boolean,
    },
    finished: {
      required: true,
      type: Boolean,
    },
  },

  methods: {
    handleClickCell(value, col, colIndex, rowIndex) {
      this.$emit("click-cell", value, col, colIndex, rowIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  background-color: #fffeff;

  &-thead {
    display: flex;
    width: 100%;
    min-height: 44px;
    /* padding: 6px 8px; */
    background-color: #FAFAFA;
    transition: background 0.2s, border-color 0.2s;
    border-bottom: 1px solid #f0f0f0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    box-sizing: border-box;

    &-tr {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
      padding: 6px 4px;
      color: #000000E0;
      font-size: 14px;
      font-weight: bold;
      box-sizing: border-box;

      &::before {
        position: absolute;
        top: 50%;
        inset-inline-end: 0;
        width: 1px;
        height: 20px;
        background-color: #f0f0f0;
        transform: translateY(-50%);
        transition: background-color 0.2s;
        content: "";
      }

      &:last-child::before {
        display: none;
      }
    }
  }

  &-body {
    &-container {}

    .loading {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #969799;
      font-size: 14px;
      background-color: #f7f8fa;
    }

    .finished {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #969799;
      font-size: 14px;
      background-color: #f7f8fa;
    }

    &-row {
      display: flex;
      width: 100%;
      min-height: 44px;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;

      &-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        padding: 6px 4px;
        -webkit-tap-highlight-color: transparent;
        color: #3D404D;
        font-size: 14px;
        box-sizing: border-box;
      }
    }

    .nodata {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 0;
      box-sizing: border-box;

      &-icon {
        width: 250px;
        height: 160px;
      }

      &-text {
        display: inline-block;
        margin-top: 22px;
        color: #ccc;
        font-size: 12px;
      }
    }
  }
}
</style>
