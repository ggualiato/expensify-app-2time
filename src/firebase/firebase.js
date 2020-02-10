import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBq5W1g2UJvw7C0rWGWizhUI0vhpo6BgH0",
    authDomain: "expensify-eb07c.firebaseapp.com",
    databaseURL: "https://expensify-eb07c.firebaseio.com",
    projectId: "expensify-eb07c",
    storageBucket: "expensify-eb07c.appspot.com",
    messagingSenderId: "232347875300",
    appId: "1:232347875300:web:f62cc7b74926abb45ff9f1"
}

firebase.initializeApp(config)

firebase.database().ref().set({
    name: 'Giovanni Gualiato'
})
