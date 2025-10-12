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

			alert('Google Sign-In Success: ' + result.user);
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

		<button @click="signInWithGoogle"><img class="coolImg" src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"/>        Sign in with Google</button>
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

.coolImg {
	width: 50px;
	height: 50px;
}

button {
	padding: 10px;
	font-size: 40px;
	cursor: pointer;
	size: 1000px;
	width: 80rem;
}
</style>
