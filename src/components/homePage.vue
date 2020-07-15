<template>
  <div>
    <navBar />
    <v-img
      src="https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg"
      contain
    />
  </div>
</template>
<script>
import navBar from "@/components/navBar";

export default {
  name: "home",
  components: { navBar },
};
</script>
