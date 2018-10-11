<template>
  <v-container>
      <v-form @submit.prevent="submit">
          <v-text-field
            label="Category Name"
            v-model="form.name"
            required
            color="green"
          ></v-text-field>
          <template v-if="editSlug">
              <v-btn
                      type="submit"
                      color="orange"
                      dark
              >Update</v-btn>
              <v-btn
                      color="red"
                      dark
                      @click="cancel"
              >Cancel</v-btn>
          </template>

          <v-btn
            v-else
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
              <v-flex v-for="(category, index) in categories" :key="category.id">
                  <v-list-tile>
                      <v-list-tile-action>
                          <v-btn icon small @click="edit(index)">
                              <v-icon color="orange">edit</v-icon>
                          </v-btn>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-title>
                              {{ category.name }}
                          </v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                          <v-btn icon small @click="destroy(category.slug, index)">
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
                categories: {},
                editSlug: null
            }
        },
        created () {
            if (!User.admin()) {
                this.$router.push('/forum');
            }

            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
                .catch(err => console.error(err))
        },
        methods: {
            submit () {
                this.editSlug ? this.update() : this.create();

            },
            create () {

                axios.post('/api/category', this.form)
                    .then(res => {
                        this.categories.unshift(res.data);
                        this.form.name = '';
                    })
                    .catch(err => console.error(err))
            },
            update () {
                axios.patch(`/api/category/${this.editSlug}`, this.form)
                    .then(res => {
                        this.categories.unshift(res.data);
                        this.form.name = '';
                        this.editSlug = null;
                    })
                    .catch(err => console.error(err))
            },
            edit (index) {
                this.editSlug = this.categories[index].slug;
                this.form.name = this.categories[index].name;
                this.categories.splice(index, 1);
            },
            destroy (slug, index) {
                axios.delete(`/api/category/${slug}`)
                    .then(res => this.categories.splice(index, 1))
                    .catch(err => console.error(err))
            },
            cancel () {
                this.editSlug = null;
                this.form.name = '';
            }
        }
    }
</script>

<style scoped>

</style>