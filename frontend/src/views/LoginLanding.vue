<template>
  <v-container class="d-flex justify-center align-center h-screen">
    <v-sheet elevation="10" rounded class="d-flex flex-column justify-space-between w-50 pa-5 bg-blue-grey-darken-3">
      <h1 class="text-h1 text-center temp-text-logo">BEAT</h1>
      <v-form class="mt-10">
        <v-text-field
          v-model="email"
          name="email"
          label="Email"
          required
        />
        <v-text-field
          v-model="password"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          name="password"
          label="Password"
          required
        />
        <v-text-field
          v-model="twofa"
          name="twofa"
          label="OTP Token"
          required
        />
        <v-btn 
          class="w-100 bg-blue-grey"
          @click="login()"
        >Login</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const twofa = ref('')

  function login(){
    //Login
  }
</script>

<style scoped>
  .temp-text-logo {
    letter-spacing: 20px !important;
  }
</style>