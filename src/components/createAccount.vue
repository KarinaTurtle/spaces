<template>
  <div>
    <v-app
      style="background-image: url('https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg')"
    >
      <v-container class="pa-12">
        <v-row>
          <v-form>
            <v-card class="pa-16">
              <v-card-title>
                Tenant
              </v-card-title>
              <v-form @submit.prevent="addUser">
                <input type="text" v-model="fname" placeholder="add name" />
              </v-form>
              <v-text-field pa-6 label="First Name" />
              <v-text-field label="Last Name" />
              <v-text-field label="Email" />
              <v-text-field label="Create Password" />
              <v-text-field label="Confirm Password" />
              <v-row>
                <v-btn rounded color="black" class="white--text" href="/acc-for"
                  >Back</v-btn
                >
                <v-btn rounded color="black" class="white--text">Next</v-btn>
              </v-row>
            </v-card>
          </v-form>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      fname: "",
    };
  },
  methods: {
    ...mapMutations(["ADD_LINK", "ADD_USER"]),

    addUser: function() {
      this.ADD_USER(this.fname);
      this.fname = "";
    },
  },
  computed: {},
};
</script>
<style></style>
