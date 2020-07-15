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
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "navBar",
};
</script>
<style scoped></style>
