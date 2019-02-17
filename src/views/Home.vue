<template>
  <v-app light v-scroll="onScroll">
    <section>
      <v-parallax
        src="https://images2.alphacoders.com/914/thumb-1920-914910.jpg"
        height="600"
      >
        <v-layout column align-center justify-center class="white--text">
          <h1 class=" text--darken-3 mb-2 display-1  text-xs-center">
            {{ hitokoto.hitokoto }}
          </h1>
          <v-btn class="blue lighten-2 mt-5" dark large _blank to="/one-read">
            Get Start
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">这是最好的时代</h2>
            <span class="subheading">从现在开始</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2" v-cloak
                      >color_lens</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">设计</div>
                  </v-card-title>
                  <v-card-text>
                    本站完全遵循Material Design设计，统一设计语言。
                    <br />首页图片采用视差设计，呈现更好的效果。 <br />
                    内容页采用抽屉式布局，在移动端展示更贴近原生。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2" v-cloak
                      >flash_on</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">技术</div>
                  </v-card-title>
                  <v-card-text>
                    前端使用<code>Vue</code>、<code>Vuetify</code>、<code>Sccc</code>、<code>Vuex</code>、<code
                      >vue-router</code
                    >
                    <br />
                    后端使用<code>node.js</code>、<code>koa2</code>、<code
                      >mongodb</code
                    >
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2" v-cloak
                      >360</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">目的</div>
                  </v-card-title>
                  <v-card-text>
                    给自己一个思考、写作的空间，博客，文章，随笔<br />
                    提醒自己学会总结<br />
                    保持学习的状态<br />
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        height="300"
      >
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            努力，从现在开始！
          </div>
          <em>跟我一起创造吧</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="https://github.com/WayNian"
            target="_blank"
          >
            GitHub
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">个人信息</div>
              </v-card-title>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fas fa-user-circle</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>waynian</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-html5</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      ><v-progress-linear
                        background-color="pink lighten-3"
                        color="pink lighten-1"
                        value="40"
                      ></v-progress-linear
                    ></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-css3-alt</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      ><v-progress-linear
                        background-color="pink lighten-3"
                        color="pink lighten-1"
                        value="30"
                      ></v-progress-linear
                    ></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-js-square</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      ><v-progress-linear
                        background-color="pink lighten-3"
                        color="pink lighten-1"
                        value="50"
                      ></v-progress-linear
                    ></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-node</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      ><v-progress-linear
                        background-color="pink lighten-3"
                        color="pink lighten-1"
                        value="27"
                      ></v-progress-linear
                    ></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-java</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      ><v-progress-linear
                        background-color="pink lighten-3"
                        color="pink lighten-1"
                        value="23"
                      ></v-progress-linear
                    ></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">联系我</div>
              </v-card-title>
              <v-card-text>
                如果在此网站遇到问题或者疑惑，你可以通过下面方式联系我.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-qq</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>1245343496</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fab fa-weixin</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>waynian</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >fas fa-map-marker-alt</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>南京，江苏</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2" v-cloak
                      >email</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>waynian@foxmail.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <v-footer class="blue darken-2" height="auto">
      <v-layout row wrap>
        <v-flex xs12 text-xs-center>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text" v-cloak>favorite</v-icon>
            by <a class="white--text" href="#" target="_blank">waynian</a>
          </div>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <div class="white--text ml-3">
            备案号：
            <a
              class="white--text"
              href="http://www.miibeian.gov.cn"
              target="_blank"
              >苏ICP备18061251号</a
            >
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
    <transition name="fade">
      <v-btn
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        v-if="offsetTop > 250"
        @click="scrollTop"
      >
        <v-icon v-cloak>keyboard_arrow_up</v-icon>
      </v-btn>
    </transition>
  </v-app>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  data: () => ({
    hitokoto: {},
    offsetTop: 0
  }),
  mounted() {
    let url = "https://v1.hitokoto.cn/";
    axios
      .get(url)
      .then(res => {
        this.hitokoto = res.data;
      })
      .catch(() => {});
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    scrollTop() {
      $("html,body").animate({ scrollTop: 0 }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
