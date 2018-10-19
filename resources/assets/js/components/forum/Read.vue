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
      :question="question"
    ></replies>

    <v-container>
      <new-reply
        :questionSlug="question.slug"
      ></new-reply>
    </v-container>
  </v-flex>
</template>

<script>
import ShowQuestion from './ShowQuestion';
import EditQuestion from './EditQuestion';
import Replies from '../reply/Replies';
import NewReply from '../reply/NewReply';

export default {
  components: {
    ShowQuestion,
    EditQuestion,
      Replies,
      NewReply
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
