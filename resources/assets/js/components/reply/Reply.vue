<template>
    <v-flex class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline mr-3">{{ data.user }}</div>
                <div> said {{ data.created_at }}</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text v-html="data.reply"></v-card-text>
            <v-divider></v-divider>
            <v-card-actions v-if="own">
                <v-btn icon small>
                    <v-icon color="orange">edit</v-icon>
                </v-btn>
                <v-btn icon small>
                    <v-icon color="red">delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        data () {
            return {

            }
        },
        computed: {
            own () {
                return User.own(this.data.user_id);
            }
        }
    }
</script>

<style scoped>

</style>