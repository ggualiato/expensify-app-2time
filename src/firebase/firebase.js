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

const database = firebase.database()

database.ref().set({
    name: 'Giovanni Gualiato',
    age: 23,
    isSingle: true,
    location: {
        city: 'Santo André',
        country: 'Brasil'
    }
})

// database.ref().set('This is my data.')

database.ref('age').set(27)
database.ref('location/city').set('São Paulo')

database.ref('attributes').set({
    height: 1.73,
    weight: 75
})
// database.ref('attributes')
