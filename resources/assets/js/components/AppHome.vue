<template>
    <v-flex>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
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

</style>