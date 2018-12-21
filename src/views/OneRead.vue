<template>
  <v-app light>
    <v-content class="white--text">
      <v-container fill-height>
        <v-layout justify-center>
          <v-flex shrink md5>
            <v-flex xs10 offset-xs1 v-if="!oneArticle.title" text-xs-center>
              <v-progress-circular
                indeterminate
                color="red"
              ></v-progress-circular>
            </v-flex>
            <v-card-text>
              <h1
                class="grey--text text--darken-3 headline font-weight-bold text-xs-center"
              >
                {{ oneArticle.title }}
              </h1>
              <br />
              <h1 class="grey--text text--darken-3 subheading text-xs-center">
                {{ oneArticle.author }}
              </h1>
              <br />
              <p
                class=" grey--text text--darken-3  body-2 text-md-left"
                v-html="oneArticle.content"
              ></p>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    oneArticle: {}
  }),
  mounted() {
    axios
      .get("https://interface.meiriyiwen.com/article/today?dev=1")
      .then(res => {
        console.log(JSON.stringify(res.data));
        this.oneArticle = res.data.data;
      })
      .catch(() => {});
  }
};</script
>s
<style lang="scss" scoped>
/deep/ .v-card__text {
  padding: 0;
}
</style>
