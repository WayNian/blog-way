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
                        <v-flex v-for="n in 16" :key="n" xs12 lg3 md3>
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
                                class="grey lighten-2 click-img"
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
                                <div>
                                  <span class="headline">Cafe Badilico</span>
                                  <div>2018年12月22日</div>
                                  <div class="d-flex">
                                    <v-rating
                                      :value="value"
                                      color="amber"
                                      dense
                                      half-increments
                                      readonly
                                      size="14"
                                    ></v-rating>
                                    <div class="ml-2 grey--text text--darken-2">
                                      <span>{{ value }}</span>
                                      <span>({{ reviews }})</span>
                                    </div>
                                  </div>
                                </div>
                                <v-spacer></v-spacer>
                                <v-btn
                                  icon
                                  class="mr-0"
                                  @click="toArticleInfo(n)"
                                >
                                  <v-icon>fas fa-chevron-right</v-icon>
                                </v-btn>
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
.click-img {
  cursor: pointer;
}
</style>
