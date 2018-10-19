<template>
  <v-container>
    <v-form @submit.prevent="create" class="xs6">
        <v-text-field
                prepend-icon="create"
                v-model="form.title"
                type="text"
                clearable
                label="Title"
                color="success"
        ></v-text-field>
        <v-autocomplete
          prepend-icon="format_list_bulleted"
          v-model="form.category_id"
          :items="categories"
          clearable
          item-text="name"
          item-value="id"
          label="Category"
          color="success"
      >
      </v-autocomplete>

      <markdown-editor v-model="form.body" ref="markdownEditor"></markdown-editor>

      <v-btn color="success" type="submit">Create</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor';

export default {
  components: {
      markdownEditor
  },
  data () {
    return {
      form: {
        title: '',
        category_id: '',
        body: ''
      },
      categories: [],
      errors: ''
    }
  },
  created () {
    axios.get('/api/category')
      .then(res => {
        this.categories = res.data.data;
      })
      .catch(err => console.error(err));  
  },
  methods: {
    create () {
      axios.post('/api/question', this.form)
        .then(res =>this.$router.push(res.data.path))
        .catch(error => this.errors = error.response.data.error)
    }
  }
}
</script>

<style>
</style>
