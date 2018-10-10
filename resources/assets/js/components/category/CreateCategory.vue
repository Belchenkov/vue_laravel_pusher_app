<template>
  <v-container>
      <v-form @submit.prevent="submit">
          <v-text-field
            label="Category Name"
            v-model="form.name"
            required
            color="green"
          ></v-text-field>
          <v-btn
            type="submit"
            color="green"
            dark
          >Create</v-btn>
      </v-form>
      <hr class="my-3">
      <v-card class="elevation-12">
          <v-toolbar color="green" dark dense>
              <v-toolbar-title>Categories</v-toolbar-title>
          </v-toolbar>
          <v-list>
              <v-flex v-for="category in categories" :key="category.id">
                  <v-list-tile>
                      <v-list-tile-action>
                          <v-btn icon small>
                              <v-icon color="orange">edit</v-icon>
                          </v-btn>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-title>
                              {{ category.name }}
                          </v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                          <v-btn icon small>
                              <v-icon color="red">delete</v-icon>
                          </v-btn>
                      </v-list-tile-action>
                  </v-list-tile>
                  <v-divider></v-divider>
              </v-flex>
          </v-list>
      </v-card>

  </v-container>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    name: ''
                },
                categories: {}
            }
        },
        created () {
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
                .catch(err => console.error(err))
        },
        methods: {
            submit () {
                axios.post('/api/category', this.form)
                    .then(res => console.log(res.data))
            }
        }
    }
</script>

<style scoped>

</style>