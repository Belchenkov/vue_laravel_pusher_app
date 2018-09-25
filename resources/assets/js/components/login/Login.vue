<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="blue-grey darken-3">
                                <v-toolbar-title>Войти</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit="login">
                                    <v-text-field
                                            prepend-icon="email"
                                            v-model="form.email"
                                            type="email"
                                            clearable
                                            color="blue-grey darken-3"
                                    ></v-text-field>
                                    <v-text-field
                                            prepend-icon="lock"
                                            v-model="form.password"
                                            clearable
                                            type="password"
                                            color="blue-grey darken-3"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                        color="blue-grey darken-3"
                                        @click="login"
                                        dark
                                >Войти</v-btn>
                                <v-spacer></v-spacer>
                                <router-link to="/signup">
                                    <v-btn
                                            color="blue-grey darken-3"
                                            flat
                                            dark
                                    >Зарегистрироваться</v-btn>
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                drawer: null,
                form: {
                    email: null,
                    password: null
                },
                valid: false
            }
        },
        methods: {
            login () {
                User.login(this.form);
            }
        },
        created () {
            if (User.loggedIn()) {
                this.$router.push({name: 'forum'})
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>