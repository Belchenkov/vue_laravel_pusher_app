<template>
  <show-question :question="question"></show-question>
</template>

<script>
import ShowQuestion from './ShowQuestion';

export default {
  components: {
    ShowQuestion
  },
  data () {
    return {
      question: {}
    }
  },
  created () {
    axios.get(`/api/question/${this.$route.params.slug}`)
      .then(res => this.question = res.data.data)
      .catch(error => console.error(error))
  }
}
</script>

<style>

</style>
