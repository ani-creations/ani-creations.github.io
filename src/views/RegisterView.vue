<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseStore } from '../stores/firebase'

defineProps<{
  msg: string
}>()

const { firebaseApp } = useFirebaseStore();

const username = ref("Mr. Sir");

function signInWithGoogle() {
  const provider = new firebaseApp.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        // user is signed in here
        // auth.onAuthStateChanged will handle UI update, so no need to do it here
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error.message);
        alert("Failed to sign in: " + error.message);
      });
}
</script>

<template>
  <div class="RegisterBox">
    <h1>Register your account</h1>

    <h4>Username:</h4>
    <input v-model="username"/>

    <h2 class="divider">-- or --</h2>

    <h4>Sign in with Google</h4>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<style scoped>
  .RegisterBox {
      align-items: center;
      text-align: center;
      align-content: center;
      justify-content: center;
  };

  .divider {
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>