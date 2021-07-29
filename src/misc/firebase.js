import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDvK-VlUcprWnOR_aRWojitJ7YRlqDAQPE',
  authDomain: 'chat-web-app-c68c4.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-c68c4-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-c68c4',
  storageBucket: 'chat-web-app-c68c4.appspot.com',
  messagingSenderId: '712055620980',
  appId: '1:712055620980:web:0ef47cc7031de515161821',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
