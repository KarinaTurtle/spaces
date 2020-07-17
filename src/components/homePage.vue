<template>
  <v-app
    ><div>
      <navBar />
      <v-img
        src="https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg"
        contain
      />
      <dashboard-menu />
    </div>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar";
import dashboardMenu from "@/components/dashboardMenu";

export default {
  name: "home",
  components: { navBar, dashboardMenu },
};
</script>
<style>
.v-application--wrap {
  display: block;
}
</style>
