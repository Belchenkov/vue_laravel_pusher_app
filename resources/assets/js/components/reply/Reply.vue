<template>
    <v-flex class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline mr-3">{{ data.user }}</div>
                <div> said {{ data.created_at }}</div>
            </v-card-title>
            <v-divider></v-divider>

            <edit-reply
                v-if="editing"
                :reply="data"
            ></edit-reply>

            <v-card-text v-else v-html="reply"></v-card-text>
            <v-divider></v-divider>

            <v-flex v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon small @click="edit">
                        <v-icon color="orange">edit</v-icon>
                    </v-btn>
                    <v-btn icon small @click="destroy">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-flex>
        </v-card>
    </v-flex>
</template>

<script>
    import EditReply from './EditReply';

    export default {
        props: [
            'data',
            'index'
        ],
        components: {
            EditReply
        },
        data () {
            return {
                editing: false
            }
        },
        computed: {
            own () {
                return User.own(this.data.user_id);
            },
            reply () {
                return md.parse(this.data.reply);
            }
        },
        methods: {
            destroy () {
                EventBus.$emit('deleteReply', this.index);
            },
            edit () {
                this.editing = true;
            },
            listen () {
                EventBus.$on('cancelEditing', () => {
                    this.editing = false;
                });
            }
        },
        created () {
            this.listen();
        }
    }
</script>

<style scoped>

</style>