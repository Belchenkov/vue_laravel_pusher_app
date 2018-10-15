<template>
  <v-flex v-if="question">
    <edit-question
      v-if="editing"
      :question="question"
    ></edit-question>
    <show-question 
      v-else
      :question="question"
    ></show-question>
    <replies
      :replies="question.replies"
    ></replies>
  </v-flex>
</template>

<script>
import ShowQuestion from './ShowQuestion';
import EditQuestion from './EditQuestion';
import Replies from '../reply/Replies';

export default {
  components: {
    ShowQuestion,
    EditQuestion,
      Replies
  },
  data () {
    return {
      question: null,
      editing: false
    }
  },
  created () {
    this.listen();
    this.getQuestion();
  },
  methods: {
    listen () {
      EventBus.$on('startEditing', () => {
        this.editing = true;
      });
      EventBus.$on('cancelEditing', () => {
        this.editing = false;
      });
    },
    getQuestion () {
      axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res => this.question = res.data.data)
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

</style>
