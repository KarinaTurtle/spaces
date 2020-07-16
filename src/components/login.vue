<template>
  <div>
    <v-app class="container"
      ><v-card class="justify-center mx-auto my-12" width="550" outlined raised>
        <v-img
          src="https://blog.modsy.com/wp-content/uploads/2019/06/D2_Full.jpg"
          contain
        />
        <hr />
        <v-form>
          <v-card-title default><h3>Spaces</h3></v-card-title>
          <v-container>
            <v-row>
              <v-col cols="8">
                <v-text-field label="userName" required></v-text-field
                ><v-text-field label="Password" required>
                  Password</v-text-field
                ></v-col
              ></v-row
            >
            <div class="text-center">
              <v-col>
                <v-btn
                  href="/home"
                  rounded
                  large
                  color="black"
                  style="color: white"
                  >Login</v-btn
                >
              </v-col>
              <v-col class="justify-center"
                ><v-btn text color="black"><p>Forgot Password?</p></v-btn>
                <v-btn text color="black">
                  <p>Forgot Username?</p></v-btn
                ></v-col
              >
            </div>
          </v-container>
        </v-form></v-card
      ></v-app
    >
  </div>
</template>
<script>
export default {};
</script>
<style>
* {
  justify-content: space-evenly;
}
</style>
