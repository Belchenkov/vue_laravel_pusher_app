<template>
    <v-flex class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline mr-3">{{ data.user }}</div>
                <div> said {{ data.created_at }}</div>
            </v-card-title>

            <v-card-text v-html="data.reply"></v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        props: [
            'data'
        ]
    }
</script>

<style scoped>

</style>