<template>
  <div class="header">
    <div
      v-show="isshow"
      v-for="(item, index) in list"
      :key="index"
      @click="selNum(index)"
      class="link"
    >
      <router-link class="fonts" :to="item.path">
        <span v-show="index != num" class="icons" :class="item.icon"></span>
        <span v-show="index == num" class="icons" :class="item.active"></span>
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "LWHeader",
  data() {
    return {
      isshow: true,
      num: 0,
      list: [
        {
          icon: "homeicon",
          active: "selhomeicon",
          name: "首页",
          path: "/"
        },
        {
          icon: "abouticon",
          active: "selabouticon",
          name: "关于",
          path: "/About"
        },
        {
          icon: "caticon",
          active: "selcaticon",
          name: "购物车",
          path: "/Shopping"
        },
        {
          icon: "mineicon",
          active: "selmineicon",
          name: "我的",
          path: "/Mine"
        }
      ]
    };
  },
  watch: {
    $route(route) {
      // console.log(route);
      if (route.name === "Details") {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    }
  },
  methods: {
    selNum(index) {
      // console.log(index);
      this.num = index;
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  .link {
    width: 25%;
    height: 49px;
    background-color: aquamarine;
    border-left: 1px solid red;

    .fonts {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      font-size: 0.6em;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
      .icons {
        width: 0.26rem;
        height: 0.26rem;
        background-size: cover;
      }
      .homeicon {
        background-image: url("../assets/IndexLogo.png");
      }
      .selhomeicon {
        background-image: url("../assets/IndexLogoSel.png");
      }
      .abouticon {
        background-image: url("../assets/SearchLogo.png");
      }
      .selabouticon {
        background-image: url("../assets/SearchLogoSel.png");
      }
      .caticon {
        background-image: url("../assets/ShoppingLogo.png");
      }
      .selcaticon {
        background-image: url("../assets/ShoppingLogoSel.png");
      }
      .mineicon {
        background-image: url("../assets/MineLogo.png");
      }
      .selmineicon {
        background-image: url("../assets/MineLogoSel.png");
      }
    }

    // img {
    //   width: 0.32rem;
    //   height: 0.32rem;
    // }
  }
}
</style>
