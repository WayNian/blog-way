<template>
  <v-content>
    <v-toolbar dense class="hidden-md-and-up">
      <v-btn icon> <v-icon>arrow_back</v-icon> </v-btn>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon> <v-icon>search</v-icon> </v-btn>

      <v-btn icon> <v-icon>favorite</v-icon> </v-btn>

      <v-btn icon> <v-icon>more_vert</v-icon> </v-btn>
    </v-toolbar>
    <v-flex xs10 md6 offset-md3 offset-xs1>
      <p xs12 class="title font-weight-bold text-xs-center">
        {{ blogInfo.title }}
      </p>
      <p v-html="blogInfo.html"></p>
    </v-flex>
  </v-content>
</template>

<script>
import http from "../http";
export default {
  data: () => ({
    blogInfo: {}
  }),
  mounted() {
    const id = this.$route.params.id;
    http.get("blogs/info", { id }).then(res => {
      console.log("--->>>", res);
      this.blogInfo = res.data.blogInfo;
    });
  }
};
</script>
