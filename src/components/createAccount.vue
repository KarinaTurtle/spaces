<template>
  <div>
    <v-app
      style="background-image: url('https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg')"
    >
      <v-container class="pa-12">
        <v-row>
          <v-card class="pa-16">
            <v-card-title>
              Tenant
            </v-card-title>
            <v-form>
              <v-text-field
                class="pa-4"
                type="text"
                v-model="newUser_fName"
                label="First Name"
              />
              <v-text-field
                class="pa-4"
                type="text"
                v-model="newUser_lName"
                label="last Name"
              />
              <v-text-field
                class="pa-4"
                type="text"
                v-model="newUser_email"
                label="email"
              />
              <v-row>
                <v-btn rounded color="black" class="white--text" href="/acc-for"
                  >Back</v-btn
                >
                <v-btn
                  @click="registerUser"
                  rounded
                  color="black"
                  class="white--text"
                  >Next</v-btn
                >
              </v-row>
            </v-form>
          </v-card>
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
      newUser_fName: "",
      newUser_lName: "",
      newUser_email: "",
    };
  },
  methods: {
    ...mapMutations(["ADD_USER"]),
    registerUser() {
      fetch("regisster/endpoint") // request is optional, if you want to add the user to database if not you can dispatch it
        .then(() => {
          //if request is success the user will added to the state
          this.$store.dispatch("addUser", {
            first_name: this.newUser_fName,
            last_name: this.newUser_lName,
            email: this.newUser_email,
            password: this.newUser_password,
          });
        });
    },
  },
};
</script>
<style></style>
