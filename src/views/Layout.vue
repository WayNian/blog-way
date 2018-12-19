<template>
  <v-app id="inspire" light v-scroll="onScroll">
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> {{ item.text }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Waynian</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="grey"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <router-view />
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
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </transition>
  </v-app>
</template>

<script>
import $ from "jquery";
export default {
  data: () => ({
    title: "Your Logo",
    offsetTop: 0,
    dialog: false,
    drawer: null,
    items: [
      { icon: "contacts", text: "每日一读" },
      { icon: "history", text: "博客" },
      { icon: "content_copy", text: "友链" },
      { icon: "chat_bubble", text: "归档" },
      { icon: "help", text: "留言" },
      { icon: "settings", text: "个人信息" }
    ]
  }),
  props: {
    source: String
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
