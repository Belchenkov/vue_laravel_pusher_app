<template>
    <v-flex>
        <toolbar></toolbar>
        <router-view></router-view>
    </v-flex>
</template>

<script>
    import Toolbar from './Toolbar';
    import AppFooter from './AppFooter';
    import Login from './login/Login';

    export default {
        components: {
            Toolbar,
            AppFooter,
            Login
        }
    }
</script>

<style>
    a {
        text-decoration: none;
    }
</style>