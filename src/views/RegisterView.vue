<script setup lang="ts">
import { ref } from 'vue'
import firebase from 'firebase/compat/app';

defineProps<{
	msg: string
}>()

const username = ref('Mr. Sir');

function signInWithGoogle() {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
		.then((result) => {
			// user is signed in here
			// auth.onAuthStateChanged will handle UI update, so no need to do it here

			console.log('Google Sign-In Success:', result.user);
		})
		.catch((error) => {
			console.error('Google Sign-In Error:', error.message)
			alert('Failed to sign in: ' + error.message)
		})
}
</script>

<template>
	<main>
		<h1>Register your account</h1>

		<h4>Username:</h4>
		<input v-model="username" />

		<h2 class="divider">-- or --</h2>

		<h4>Sign in with Google</h4>
		<button @click="signInWithGoogle">Sign in with Google</button>
	</main>
</template>

<style scoped>
main {
	align-items: center;
	text-align: center;
	align-content: center;
	justify-content: center;
}

.divider {
	margin-top: 100px;
	margin-bottom: 100px;
}
</style>
