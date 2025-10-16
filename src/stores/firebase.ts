import { defineStore } from 'pinia'
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

export const useFirebaseStore = defineStore('firebase', {
	state: () => {
	const firebaseApp = initializeApp({
		apiKey: 'AIzaSyAuggtEsHHtIKS-O-TqGhiuZKea68ShaMo',
		authDomain: 'chat2-2b110.firebaseapp.com',
		databaseURL: 'https://chat2-2b110-default-rtdb.firebaseio.com',
		projectId: 'chat2-2b110',
		storageBucket: 'chat2-2b110.firebasestorage.app',
		messagingSenderId: '493360800224',
		appId: '1:493360800224:web:ee718031c607acaf8ecb85',
		measurementId: 'G-4V7H16YMW1',
	});
	const firebaseDatabase = getDatabase(firebaseApp);
	const firebaseAuth = getAuth(firebaseApp);

		return {
			firebaseApp,
			firebaseAuth,
			firebaseDatabase,
		}
	},

	getters: {

	},

	actions: {
		// add Firebase-related actions here later
	},
})
