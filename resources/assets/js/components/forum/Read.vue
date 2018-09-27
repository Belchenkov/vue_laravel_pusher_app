<template>
  
</template>

<script>
export default {
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
