<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const username = ref("Mr. Sir");
</script>

<template>
  <div class="RegisterBox">
    <h1>Register your account</h1>

    <h4>Username:</h4>
    <input v-model="username"/>

    <h2 class="divider">-- or --</h2>
    
    <h4>Sign in with Google</h4>
    <h1>Tmp until firebase</h1>
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