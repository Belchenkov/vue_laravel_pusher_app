<template>
  <v-container>
    <v-form @submit="create" class="xs6">
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
          v-model="form.categoryId"
          :items="categories"
          clearable
          item-text="name"
          item-value="id"
          label="Category"
          color="success"
      >
      </v-autocomplete>
        <v-btn color="success" type="submit">Create</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        categoryId: ''
      },
      categories: []
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
      
    }
  }
}
</script>

<style>

</style>
