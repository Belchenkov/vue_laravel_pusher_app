<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-actions class="grey darken-3 justify-center">
                &copy;2018 — <strong>Vuetify</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Slabo+27px');

    #toolbar {
        font-family: 'Slabo 27px', serif;
        font-weight: bold;
    }
</style>