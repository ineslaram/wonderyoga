<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignUp">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                    v-model="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    type="confirmPassword"
                    v-model="confirmPassword"
                    :rules="[comparePasswords]"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit">Registrase</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase';
import { router } from '@/router'
  export default {
    name: 'RegisterForm',
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Las contraseñas no coinciden' : ''
      },
      user () {
        return this.$store.getters.user
       }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) 
        this.$router.push('/')
      }
    },   
   
    methods: {
      onSignUp () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        this.$emit('registerSucess')
      }
    }
  }
 
</script>

<style lang="scss" scoped>
</style>