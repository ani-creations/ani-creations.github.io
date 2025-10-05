<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const username = ref("Mr. Sir");
</script>

<template>
  <div class="RegisterBox">
    <h2>Register your account</h2>

    <h4>Username:</h4>
    <input v-model="username"/>

    <h5>-- or --</h5>
    <h4>Sign in with Google</h4>
    <h1>Tmp until firebase</h1>
  </div>
</template>

<style scoped>
    .RegisterBox {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 100px;
    };
</style>