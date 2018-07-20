<template>
    <v-toolbar id="toolbar" color="success" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Laravel Vue Forum</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Forum</v-btn>
            <v-btn flat>Ask Action</v-btn>
            <v-btn flat>Category</v-btn>
            <v-btn flat>Login</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Merienda:400,700');

    #toolbar {
        font-family: 'Merienda', cursive;
        font-weight: bold;
        text-shadow: 0 0 2px 5px #000;
    }
</style>