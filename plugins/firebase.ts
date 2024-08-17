// plugins/firebase.client.ts
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(async nuxtApp => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  nuxtApp.provide('firestore', firestore);
});
