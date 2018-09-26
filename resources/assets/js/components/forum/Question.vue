<template>
  <v-card class="elevation-12 mb-3" id="card">
    <v-card-title primary-title>
      <v-flex>
        <h3 class="headline mb-0">
          <router-link :to="data.path">{{data.title}}</router-link>
        </h3>
        <v-flex class="grey--text">{{data.created_at}}</v-flex>
        </v-flex>
    </v-card-title>

   <v-card-text class="card-text">
     {{data.body}}
   </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>

<style>
  #card {
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.3rem;
  }

  .card-text {
    font-family: 'Dancing Script', cursive;
    font-size: 1.6rem;
  }
</style>
