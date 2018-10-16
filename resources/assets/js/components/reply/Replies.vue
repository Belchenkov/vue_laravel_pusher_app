<template>
    <v-container>
        <reply
                v-for="reply in replies"
                :data="reply"
                v-if="replies"
                :key="reply.id"
        ></reply>
    </v-container>
</template>

<script>
    import Reply from './Reply';

    export default {
        props: [
            'replies'
        ],
        components: {
            Reply
        }
    }
</script>

<style scoped>

</style>