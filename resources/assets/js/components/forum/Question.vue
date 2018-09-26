<template>
  <v-card class="elevation-12" id="card">
    <v-card-title primary-title>
      <v-flex>
        <h3 class="headline mb-0">Title of Question</h3>
        <v-flex class="grey--text">Said 4 hour ago</v-flex>
        </v-flex>
    </v-card-title>

   <v-card-text class="card-text">
     Body
   </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
  #card {
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.3rem;
  }

  .card-text {
    font-family: 'Dancing Script', cursive;
    font-size: 1.4rem;
  }
</style>
