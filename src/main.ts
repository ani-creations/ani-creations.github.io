import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { useFirebaseStore } from './stores/firebase.ts'

const app = createApp(App)

app.use(createPinia())

app.use(router)

const store = useFirebaseStore();
const firebaseApp = store.firebaseApp;

app.use(VueFire, {
	firebaseApp,
	modules: [
		VueFireAuth(),
	],
})

app.mount('#app')
