<template>
  <div>
    <router-view />
    <!-- <p>{{ this.$store.state.test }}</p> -->
    <!-- <div v-for="(item, index) in posts" :key="index">
      {{ item.title }}
    </div> -->
  </div>
</template>
<script>
// import { mapState } from "vuex";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  // mounted() {
  //   this.$store.dispatch("loadPosts");
  // },
  // computed: { ...mapState(["posts"]) },
};
</script>
