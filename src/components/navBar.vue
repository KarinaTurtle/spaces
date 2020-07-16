<template>
  <div>
    <v-app-bar app fixed color="primary" dark>
      <v-btn icon>
        <v-icon>
          mdi-sofa
        </v-icon>
      </v-btn>
      <v-toolbar-title>
        <h3 class="pl-0">Spaces</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Choose a Location -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-filter-variant</v-icon>
      </v-btn>
      <!-- dropdown bttn -->
      <v-menu top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data: () => ({
    items: [{ title: "log out" }, { title: "Account" }],
  }),
};
</script>
<style scoped></style>
