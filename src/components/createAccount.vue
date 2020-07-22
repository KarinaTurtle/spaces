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
              <v-text-field v-on:keyup="save_name" pa-6 label="First Name" />
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
export default {
  data() {
    return {};
  },
  methods: {
    save_name(fName) {
      this.$store.state.createAcc.fName = fName;
    },
  },
  computed: {},
};
</script>
<style></style>
