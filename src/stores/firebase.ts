import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// Firebase - runtime imports
import { initializeApp } from 'firebase/app'
/*import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref as dbRef, onValue, push, set, DataSnapshot } from 'firebase/database'*/
import { getFirestore, collection } from 'firebase/firestore'
/*import { VueFire, VueFireAuth } from 'vuefire' // Vue specific firebase module
// Firebase - type only imports
import type { FirebaseApp } from 'firebase/app'
import type { User } from 'firebase/auth'*/

export const useFirebaseStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
	count.value++
  }

  return { count, doubleCount, increment }
})

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAuggtEsHHtIKS-O-TqGhiuZKea68ShaMo",
    authDomain: "chat2-2b110.firebaseapp.com",
    databaseURL: "https://chat2-2b110-default-rtdb.firebaseio.com",
    projectId: "chat2-2b110",
    storageBucket: "chat2-2b110.firebasestorage.app",
    messagingSenderId: "493360800224",
    appId: "1:493360800224:web:ee718031c607acaf8ecb85",
    measurementId: "G-4V7H16YMW1"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')