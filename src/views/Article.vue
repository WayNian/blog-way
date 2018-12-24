<template>
  <v-app light>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center>
          <v-flex>
            <v-tabs
              slot="extension"
              v-model="model"
              centered
              color="transparent"
              slider-color="yellow"
            >
              <v-tab
                v-for="(i, index) in tabArr"
                :key="index"
                :href="`#tab-${index}`"
              >
                {{ i }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="model">
              <v-tab-item
                v-for="(i, index) in tabArr"
                :id="`tab-${index}`"
                :key="index"
              >
                <v-layout>
                  <v-flex xs12>
                    <v-container v-bind="{ [`grid-list-lg`]: true }" fluid lg12>
                      <v-layout row wrap>
                        <v-flex v-for="n in 16" :key="n" xs12 lg4 md4>
                          <v-hover>
                            <v-card
                              flat
                              tile
                              slot-scope="{ hover }"
                              :class="`elevation-${hover ? 12 : 2}`"
                              class="mx-auto"
                            >
                              <v-img
                                :src="
                                  `https://picsum.photos/500/300?image=${n * 5 +
                                    10}`
                                "
                                :lazy-src="
                                  `https://picsum.photos/10/6?image=${n * 5 +
                                    10}`
                                "
                                :aspect-ratio="16 / 9"
                                class="grey lighten-2 click-change"
                                @click="toArticleInfo(n)"
                              >
                                <v-layout
                                  slot="placeholder"
                                  fill-height
                                  align-center
                                  justify-center
                                  ma-0
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                  ></v-progress-circular> </v-layout
                              ></v-img>
                              <v-card-title>
                                <v-flex
                                  xs12
                                  class="title click-change shadow-text"
                                  >Cafe Badilico</v-flex
                                >
                                <v-flex xs12>
                                  <span
                                    v-for="item in 3"
                                    :key="item"
                                    outline
                                    class="brown--text text--darken-4 body-2 click-change shadow-text"
                                    >HTML
                                  </span>
                                </v-flex>
                                <v-flex xs6>
                                  <div class="grey--text text--darken-2">
                                    <span
                                      >阅读:{{ value }}&nbsp;&nbsp;&nbsp;</span
                                    >
                                    <span>评论:{{ reviews }}</span>
                                  </div>
                                </v-flex>
                                <v-flex xs6 grey--text text--darken-2>
                                  <div class="text-xs-right">2天前</div>
                                </v-flex>
                              </v-card-title>
                            </v-card>
                          </v-hover>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-tab-item>
            </v-tabs-items>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    model: "tab-0",
    tabArr: ["列表", "热门"],
    reviews: 413,
    value: 4.5
  }),
  mounted() {},
  methods: {
    toArticleInfo(id) {
      this.$router.push({
        name: "article-info",
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.click-change {
  cursor: pointer;
}
.shadow-text {
  margin-right: 10px;
  &:hover {
    text-shadow: 0 1px 2px rgba(99, 96, 92, 0.445);
  }
}
</style>
