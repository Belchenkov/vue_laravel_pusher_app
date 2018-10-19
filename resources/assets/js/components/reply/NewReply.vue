<template>
    <v-flex mt-4>
        <markdown-editor v-model="form.body"></markdown-editor>
        <v-btn dark color="green" @click="submit">
            Reply
        </v-btn>
    </v-flex>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor';

    export default {
        props: [
            'questionSlug'
        ],
        components: {
            markdownEditor
        },
       data () {
           return {
               form: {
                   body: ''
               }
           }
       },
        methods: {
            submit () {
                axios.post(`/api/question/${this.questionSlug}/reply`, {body: this.form.body})
                    .then(res => {
                        this.form.body = '';
                        EventBus.$emit('newReply', res.data.reply);
                    })
                    .catch(err => console.error(err))
            }
        }
    }
</script>

<style scoped>

</style>