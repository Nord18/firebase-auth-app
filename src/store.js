import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase/init'
import firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        message: ''
    },
    actions: {
        createUser({commit, state}, {email, password, name}) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    state.message = ''
                })
                .then(() => {
                    firebase.auth().currentUser.updateProfile({
                        displayName: name
                    })
                })
                .catch(error => {
                    state.message = error.message
                })
        },
        logOutUser() {
            firebase.auth().signOut()
        },
        logInUser({commit, state}, {email, password}) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((cred) => {
                    state.message = ''
                })
                .catch(error => {
                    state.message = error.message
                })
        }
    }
})
