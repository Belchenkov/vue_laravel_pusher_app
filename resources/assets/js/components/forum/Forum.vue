<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question></question>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import question from './Question'

export default {
  components: {
    question
  }
}
</script>
