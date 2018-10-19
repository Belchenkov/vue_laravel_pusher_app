<template>
    <v-flex>
        <v-btn icon @click="likeIt">
            <v-icon :color="color">favorite</v-icon> {{ count }}
        </v-btn>
    </v-flex>
</template>

<script>
    export default {
        props: [
            'content'
        ],
        data () {
            return {
                liked: this.content.liked,
                count: this.content.like_count
            }
        },
        computed: {
            color () {
                return this.liked ? 'red' : 'red lighten-4';
            }
        },
        methods: {
            likeIt () {
                if (User.loggedIn()) {
                    this.liked ? this.decr() : this.incr();
                    this.liked = !this.liked;
                }
            },
            incr () {
                axios.post(`/api/like/${this.content.id}`)
                    .then(res => this.count++)
                    .catch(err => console.error(err));
            },
            decr () {
                axios.delete(`/api/like/${this.content.id}`)
                    .then(res => this.coun--)
                    .catch(err => console.error(err));
            }
        }
    }
</script>

<style scoped>

</style>