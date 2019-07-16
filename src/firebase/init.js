import firebase from 'firebase';

var firebaseConfig = {
	apiKey: "AIzaSyD8ucHuMCafBG4ZhW3J8kMk6qNHGZR0g4k",
    authDomain: "my-firebase-auth-app-6f25e.firebaseapp.com",
    databaseURL: "https://my-firebase-auth-app-6f25e.firebaseio.com",
    projectId: "my-firebase-auth-app-6f25e",
    storageBucket: "",
    messagingSenderId: "1079805549231",
    appId: "1:1079805549231:web:38761b240fc52a90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()