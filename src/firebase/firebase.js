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

export { firebase, database as default }

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 65464646
// })

// database.ref('expenses').push({
//     description: 'sd',
//     note: '',
//     amount: 88,
//     createdAt: 65464333
// })

// database.ref('expenses').push({
//     description: 'fds',
//     note: '',
//     amount: 109500,
//     createdAt: 95466646
// })

// database.ref()
//     .set({
//         name: 'Giovanni Gualiato',
//         age: 23,
//         isSingle: true,
//         location: {
//             city: 'Santo André',
//             country: 'Brasil'
//         }
//     }).then(() => {
//         console.log('Data is saved')
//     }).catch((e) => {
//         console.log('This failed.', e)
//     })

// // database.ref().set('This is my data.')

// database.ref('age').set(27)
// database.ref('location/city').set('São Paulo')

// database.ref('attributes')
//     .set({
//         height: 1.73,
//         weight: 75
//     })
//     .then(() => {
//         console.log();
//     })
//     .catch((e) => {
//         console.log();
//     })

// database.ref().remove()
// // database.ref('attributes')

