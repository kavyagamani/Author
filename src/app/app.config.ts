import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"author-e1e0b","appId":"1:660086118824:web:ce529b61d7a36c105ce59d","storageBucket":"author-e1e0b.appspot.com","apiKey":"AIzaSyBPjwxcKA2pLubWznrjRtzHLRMAgLisJJk","authDomain":"author-e1e0b.firebaseapp.com","messagingSenderId":"660086118824"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
