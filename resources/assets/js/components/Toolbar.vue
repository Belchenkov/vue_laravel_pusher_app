<template>
    <v-toolbar id="toolbar" color="success" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/">Laravel Vue Forum</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <router-link 
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                v-if="item.show"
            >
                <v-btn flat>{{item.title}}</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar",
        data () {
            return {
                items: [
                    { title: 'Forum', to: '/forum', show: User.loggedIn() },
                    { title: 'Ask Action', to: '/ask', show: User.loggedIn() },
                    { title: 'Category', to: '/category', show: User.admin() },
                    { title: 'Login', to: '/login', show: !User.loggedIn() },
                    { title: 'Logout', to: '/logout', show: User.loggedIn() }
                ]
            }
        },
        created () {
            EventBus.$on('logout', () => {
                User.logout();
            });
        }
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