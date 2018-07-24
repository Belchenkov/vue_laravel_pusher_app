<template>
    <v-toolbar id="toolbar" color="success" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/">Laravel Vue Forum</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <router-link to="/forum">
                <v-btn flat>Forum</v-btn>
            </router-link>
            <router-link  to="/questions">
                <v-btn flat>Ask Action</v-btn>
            </router-link>
            <router-link  to="/category">
                <v-btn flat>Category</v-btn>
            </router-link>
            <router-link to="/login">
                <v-btn flat>Login</v-btn>
            </router-link>
        </div>
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

    a {
        text-decoration: none;
        color: white;
    }
</style>