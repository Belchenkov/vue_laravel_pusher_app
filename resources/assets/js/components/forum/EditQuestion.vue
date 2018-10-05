<template>
  <v-card>
    <v-container>
      <v-form @submit.prevent="update">
        <v-text-field
                  prepend-icon="create"
                  v-model="form.title"
                  type="text"
                  clearable
                  label="Title"
                  color="success"
          ></v-text-field>
        <markdown-editor v-model="form.body" ref="markdownEditor"></markdown-editor>
        
        <v-card-actions>
          <v-btn icon small type="submit">
            <v-icon color="teal">save</v-icon>
          </v-btn>
          <v-btn icon small @click="cancel">
            <v-icon>cancel</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor';

export default {
  props: [
    'question'
  ],
  components: {
      markdownEditor
  },
  data () {
    return {
      form: {
        title: '',
        body: ''
      },
    }
  },
  created () {
    this.form = this.question;
  },
  methods: {
    cancel () {
      EventBus.$emit('cancelEditing');
    },
    update () {
      axios.patch(`/api/question/${this.form.slug}`, this.form)
        .then(res => this.cancel())
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
