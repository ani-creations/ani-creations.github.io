import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app';

export const useFirebaseStore = defineStore('firebase', {
	state: () => {
		const firebaseConfig = {
			apiKey: 'AIzaSyAuggtEsHHtIKS-O-TqGhiuZKea68ShaMo',
			authDomain: 'chat2-2b110.firebaseapp.com',
			databaseURL: 'https://chat2-2b110-default-rtdb.firebaseio.com',
			projectId: 'chat2-2b110',
			storageBucket: 'chat2-2b110.firebasestorage.app',
			messagingSenderId: '493360800224',
			appId: '1:493360800224:web:ee718031c607acaf8ecb85',
			measurementId: 'G-4V7H16YMW1',
		};

	firebase.initializeApp(firebaseConfig);
	const firebaseDatabase = firebase.database();
	const firebaseAuth = firebase.auth();

		return {
			firebaseConfig,
			firebaseAuth,
			firebaseDatabase,
		}
	},

	getters: {
		firebaseApp() {
			return this.firebaseApp
		},
		firebaseDatabase() {
			return this.firebaseDatabase
		},
		firebaseFirestore() {
			return this.firebaseFirestore
		},
	},

	actions: {
		// add Firebase-related actions here later
	},
})
