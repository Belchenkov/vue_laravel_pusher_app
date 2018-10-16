<template>
    <v-flex px-4>
        <reply
                v-for="reply in content"
                :data="reply"
                v-if="content"
                :key="reply.id"
        ></reply>
    </v-flex>
</template>

<script>
    import Reply from './Reply';

    export default {
        props: [
            'replies'
        ],
        components: {
            Reply
        },
        data () {
            return {
                content: this.replies
            }
        },
        created () {
            this.listen();
        },
        methods: {
            listen () {
                EventBus.$on('newReply', (reply) => {
                    this.content.unshift(reply);
                    window.scrollTo(0, 0);
                });
            }
        }
    }
</script>

<style scoped>

</style>