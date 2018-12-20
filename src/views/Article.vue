<template>
  <v-app light>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center>
          <div>
            <v-tabs
              slot="extension"
              v-model="model"
              centered
              color="transparent"
              slider-color="yellow"
            >
              <v-tab v-for="i in 3" :key="i" :href="`#tab-${i}`">
                Item {{ i }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="model">
              <v-tab-item v-for="i in 3" :id="`tab-${i}`" :key="i">
                <v-card flat>
                  <v-card-text
                    v-text="text"
                    class="grey--text text--darken-3"
                  ></v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    model: "tab-2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }),
  mounted() {}
};</script
>s <style lang="scss" scoped></style>
