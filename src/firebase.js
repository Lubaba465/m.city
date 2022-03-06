import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
//import {cityDb} from './temp/m-city-export'
const firebaseConfig = {
    apiKey: "AIzaSyCFkPUuFQGhtpo8eZ-_JtXTESWa2e8MXNE",
    authDomain: "mcity-a5c7f.firebaseapp.com",
    projectId: "mcity-a5c7f",
    storageBucket: "mcity-a5c7f.appspot.com",
    messagingSenderId: "673727952654",
    appId: "1:673727952654:web:64931c31025f7b1e98c95f",
    measurementId: "G-8CWCBZ2H1H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB=firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });



export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
}