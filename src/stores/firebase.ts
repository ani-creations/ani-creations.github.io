import { defineStore } from 'pinia'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

export const useFirebaseStore = defineStore('firebase', {
	state: () => {
		const firebaseConfig = {
			apiKey: "AIzaSyAuggtEsHHtIKS-O-TqGhiuZKea68ShaMo",
			authDomain: "chat2-2b110.firebaseapp.com",
			databaseURL: "https://chat2-2b110-default-rtdb.firebaseio.com",
			projectId: "chat2-2b110",
			storageBucket: "chat2-2b110.firebasestorage.app",
			messagingSenderId: "493360800224",
			appId: "1:493360800224:web:ee718031c607acaf8ecb85",
			measurementId: "G-4V7H16YMW1"
		}

		const firebaseApp = initializeApp(firebaseConfig)
		const firebaseFirestore = getFirestore(firebaseApp)
		const firebaseDatabase = getDatabase(firebaseApp)

		return {
			firebaseConfig,
			firebaseApp,
			firebaseFirestore,
			firebaseDatabase
		}
	},

	getters: {
		firebaseApp() {
			return this.firebaseApp;
		},
		firebaseDatabase() {
			return this.firebaseDatabase;
		},
		firebaseFirestore() {
			return this.firebaseFirestore;
		}
	},

	actions: {
		// add Firebase-related actions here later
	}
})
