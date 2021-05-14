<template>
  <div class="">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in routePath" :key="index" :index="item.key" @click="changePath(item)">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: '1',
      routePath:[
          {path:'/',key:'1',name:'首页'},
          {path:'/vCharts',key:'2',name:'v-charts'},
      ]
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changePath(item){
         this.$router.push({path:item.path})
      }
  },
};
</script>
<style lang="scss" scoped></style>
