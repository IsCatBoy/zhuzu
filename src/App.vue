<template>
  <div id="app">
    <LWFooter></LWFooter>
    <router-view />
    <LWHeader></LWHeader>
  </div>
</template>
<script>
import LWHeader from "./components/header";
import LWFooter from "./components/footer";
export default {
  name: "App",
  components: {
    LWHeader,
    LWFooter
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: noen;
}
img {
  display: block;
}
html {
  font-size: 625%;
}
body,
html,
#app {
  height: 100%;
}
#app {
  font-size: 16px;
}
.page {
  height: calc(100% - 64px - 49px);
  overflow: scroll;
}
</style>
