<template>
    <v-container fluid>
      <v-card pa-5 id="card" class="elevation-12">
          <v-card-title>
            <div>
              <div class="headline">
                {{question.title}}
              </div>
              <span class="grey--text">
                {{question.user}} said {{question.created_at}}
            </span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark>5 Replies</v-btn>
          </v-card-title>

          <v-card-text class="card-text" v-html="question.body">

          </v-card-text>
      </v-card>
  </v-container>
</template>

<script>

export default {
  props: [
    'question'
  ],
  computed: {
    body () {
      return md.parse(this.data.body);
    }
  }

}
</script>

<style>

</style>
