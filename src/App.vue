<template>
  <v-app>
    <!-- <routerd-view /> -->
    <v-app-bar app absolute elevate-on-scroll color="primary" dark>
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
    <v-content>
      <v-img
        src="https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg"
        contain
      />
    </v-content>
    <v-content>
      <unit />
    </v-content>
  </v-app>
</template>

<script>
import unit from "./components/unit";

export default {
  name: "App",

  components: {
    unit,
  },

  data: () => ({
    //
  }),
};
</script>
