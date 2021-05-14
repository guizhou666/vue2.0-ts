<template>
  <div class="hello">
    <div class="line">
      <ve-line
        :data="chartData"
        :events="chartEvents"
        :legend-visible="false"
        :colors="colors"
      ></ve-line>
    </div>
    <div class="ring-relative">
      <ring :data="chartDataRing" :extend="chartExtendRing"></ring>
    </div>
    <div class="map-box">
       <map-box></map-box>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ring from "./components/ring.vue";
import mapBox from "./components/map.vue";
interface chartData {
  columns: Array<string>;
  rows: Array<any>;
}
interface chartEvents {}
@Component({
  components: {
    ring,mapBox
  },
})
export default class Charts extends Vue {
  private chartData: chartData = {
    columns: ["日期", "访问用户", "下单用户"],
    rows: [
      { 日期: "2018-05-22", 访问用户: 32371, 下单用户: 19810 },
      { 日期: "2018-05-23", 访问用户: 12328, 下单用户: 4398 },
      { 日期: "2018-05-24", 访问用户: 92381, 下单用户: 52910 },
    ],
  };
  private chartEvents: chartEvents = {};

  private colors: Array<any> = ["red", "green"];

  private chartExtendRing: object = {
    series: {
      radius: ["50%", "70%"],
      label: {
        normal: {
          show: true,
        //   formatter: "{d}%",
          position: "outside",
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold",
          },
        },
      },
    },
    itemStyle: {
      borderRadius: 10,
      borderColor: "#fff",
      borderWidth: 2,
    },
    legend: {
      data: ["已完成", "未完成", "成功", "失败"],
    },
    color: ["#fa6e86", "#0067a6", "#5ab1ef", "#19d4ae"],
  };
  private chartDataRing: object = {
    columns: ["状态", "完成量"],
    rows: [
      { 状态: "已完成", 完成量: 20 },
      { 状态: "未完成", 完成量: 10 },
      { 状态: "成功", 完成量: 5 },
      { 状态: "失败", 完成量: 5 },
    ],
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding: 20px;
  .line,
  .ring-relative {
    width: 400px;
    height: 400px;
  }
}
</style>
