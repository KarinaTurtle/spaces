<template>
  <div>
    <v-app
      style="background-image: url('https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg')"
    >
      <v-container class="pa-12">
        <v-row>
          <v-card class="pa-16">
            <v-card-title>
              Are you a?
            </v-card-title>
            <v-radio-group>
              <v-radio label="Tenant"></v-radio>
              <v-radio label="Landlord"></v-radio>
              <v-radio label="Contractor"></v-radio>
            </v-radio-group>
            <v-row>
              <v-btn round color="black" class="white--text" href="/login"
                >Back</v-btn
              >
              <v-btn round color="black" class="white--text" href="/create-acc"
                >Next</v-btn
              >
            </v-row>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
