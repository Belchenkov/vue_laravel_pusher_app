<template>
  <v-card>
    <v-container>
      <v-form>
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
          <v-btn icon small>
            <v-icon color="teal">save</v-icon>
          </v-btn>
          <v-btn icon small>
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
}
</script>

<style>

</style>
