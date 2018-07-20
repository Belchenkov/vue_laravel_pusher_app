<template>
    <v-flex>
        <toolbar></toolbar>
        <app-footer></app-footer>
    </v-flex>
</template>

<script>
    import Toolbar from './Toolbar';
    import AppFooter from './AppFooter';

    export default {
        components: {
            Toolbar,
            AppFooter
        }
    }
</script>

<style scoped>

</style>