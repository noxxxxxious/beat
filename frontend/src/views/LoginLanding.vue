
<template>
  <div class="login-container">
    <div class="login-header">
      <h1 class="logo">BEAT</h1>
    </div>
    <div class="login-form">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <label for="twofa">2FA Token:</label>
      <input type="text" id="twofa" v-model="twofa" required>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const twofa = ref('');

    function login() {
      // Perform login logic
    }

    return {
      email,
      password,
      twofa,
      login
    };
  }
});
</script>

<style scoped>
.login-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-header {
  margin-bottom: 50px;
}

.logo {
  font-size: 3em;
  color: #fff;
  letter-spacing: 10px;
  margin: 0;
}

.login-form {
  width: 350px;
  background-color: #ddd;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222;
  box-shadow: 0px 0px 5px 5px #00000044;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 1em;
}

label {
  width: 100%;
  font-size: 1.2em;
  margin-bottom: 5px;
}


button {
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

button:hover {
  background-color: #2980b9;
}
</style>