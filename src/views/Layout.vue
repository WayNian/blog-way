<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
      <v-footer class="blue darken-2" height="auto">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="#" target="_blank">waynian</a>
            </div>
          </v-flex>
          <v-flex xs12>
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
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: "Your Logo"
  })
};
</script>
