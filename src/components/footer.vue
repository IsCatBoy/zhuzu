<template>
  <div class="footer">
    <span v-show="isshow" class="back" @click="comeBack">返回</span>
    <div class="footer-text">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "LWFooter",
  data() {
    return {
      isshow: false,
      title: "Home"
    };
  },
  watch: {
    $route(route) {
      console.log(route);
      this.title = route.meta.title;
      if (route.name === "Details") {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    }
  },
  methods: {
    comeBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  position: relative;
  .back {
    position: absolute;
    left: 0.12rem;
  }
  .footer-text {
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 1.2em;
    font-weight: bold;
    background-color: aquamarine;
  }
}
</style>
