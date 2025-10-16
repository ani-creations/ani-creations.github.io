<script setup lang="ts">
import { ref } from 'vue';
import { useDatabase, useDatabaseObject } from 'vuefire';

	const firebaseDatabase = useDatabase();
	const publicRoomID = '_';
	const databaseRef = ref(firebaseDatabase, publicRoomID);
	// Set room id to public room id
	const roomID = useDatabaseObject(databaseRef);
</script>

<template>
	<div class="chat">
		<h1>This is an chat page</h1>
	</div>
</template>

<style scoped>
@media (min-width: 1024px) {
	.chat {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
