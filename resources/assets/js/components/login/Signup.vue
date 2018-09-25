<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="red lighten-1">
                                <v-toolbar-title>Регистрация</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            prepend-icon="account_circle"
                                            v-model="form.name"
                                            type="text"
                                            clearable
                                            color="red lighten-1"
                                    ></v-text-field>
                                    <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
                                    <v-text-field
                                            prepend-icon="email"
                                            v-model="form.email"
                                            type="email"
                                            clearable
                                            color="red lighten-1"
                                    ></v-text-field>
                                    <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>
                                    <v-text-field
                                            prepend-icon="lock"
                                            v-model="form.password"
                                            clearable
                                            type="password"
                                            color="red lighten-1"
                                    ></v-text-field>
                                    <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
                                    <v-text-field
                                            prepend-icon="lock"
                                            v-model="form.passwordConfirmation"
                                            clearable
                                            type="password"
                                            color="red lighten-1"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <router-link to="/login">
                                    <v-btn
                                            flat
                                            color="red lighten-1"
                                            dark
                                    >Войти</v-btn>
                                </router-link>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="red lighten-1"
                                        @click="signUp"
                                        dark
                                >Зарегистрироваться</v-btn>
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
                    name: null,
                    email: null,
                    password: null,
                    passwordConfirmation: null
                },
                valid: false,
                errors: {}
            }
        },
        methods: {
            signUp () {
                axios.post('/api/auth/signup', this.form)
                    .then(res => {
                        User.responseAfterLogin(res)
                        this.$router.push({name: 'forum'})
                    })
                    .catch(error =>this.errors = error.response.data.errors)
            }
        }
    }
</script>

<style scoped>

</style>