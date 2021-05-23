<template>
  <div class="container mt-5">
    <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
      <h4 class="text-center">Sign In</h4>

      <div class="form-outline mb-4">
        <input type="email" id="email" class="form-control border" v-model="email">
        <label for="email" class="form-label">Email address</label>
      </div>
        <div class="form-outline mb-4">
        <input type="password" id="password" class="form-control border" v-model="password">
        <label for="password" class="form-label">Password</label>
      </div>

      <button class="btn btn-primary btn-block">Sign In</button>

      <div class="text-center mt-3">
        <small>Not a member? <router-link to="/users/register">Register</router-link></small>
      </div>
    </form>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSub() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }
        this.login(user)
      }
    }
  }
}
</script>

<style>

</style>