<template>
  <v-app
    ><div>
      <navBar />
      <v-img
        src="https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg"
        contain
      />
    </div>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  name: "home",
  components: { navBar },
};
</script>
