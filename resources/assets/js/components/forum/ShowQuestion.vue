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
          <v-card-text class="card-text" v-html="question.body"></v-card-text>
           <v-card-actions v-if="own">
            <v-btn icon small @click="edit">
              <v-icon color="orange darken-2">edit</v-icon>
            </v-btn>
            <v-btn icon small @click="destroy">
              <v-icon color="red darken-2">delete</v-icon>
            </v-btn>
          </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>

export default {
  props: [
    'question'
  ],
  data () {
    return {
      own: User.own(this.question.user_id)
    }
  },
  computed: {
    body () {
      return md.parse(this.data.body);
    }
  },
  methods: {
    destroy () {
      axios.delete(`/api/question/${this.question.slug}`)
        .then(res => this.$router.push('/forum'))
        .catch(error => console.log(error.response.data));
    },
    edit () {
      EventBus.$emit('startEditing');
    }
  }

}
</script>

<style>

</style>
