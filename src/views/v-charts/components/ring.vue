<template>
  <div class="content-box">
    <ve-ring
      class="ring-box"
      :data="data"
      :extend="extend"
    ></ve-ring>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  components: {},
}) //这里就算没有component也要保留"@Component"，否则报错
export default class ContentBox extends Vue {
  @Prop(Object) readonly data: Object;
  @Prop(Object) readonly extend: object;
  created() {
    console.log(this.data);
    console.log(this.extend);
  }
  mounted() {}
  // computed:计算属性改为前面加get关键字
  //get computedMsg () {
  //  return 'computed ' + this.msg
  // }
  // method：方法就不用再写在methods里了，直接以类方法形式书写
}
</script>
