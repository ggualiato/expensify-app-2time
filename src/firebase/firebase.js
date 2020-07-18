import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

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
