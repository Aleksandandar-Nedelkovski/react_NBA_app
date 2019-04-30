import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCibtXgxI_ZWqKvAze0zz3owXVJsnLU-to",
    authDomain: "nba-app-57e62.firebaseapp.com",
    databaseURL: "https://nba-app-57e62.firebaseio.com",
    projectId: "nba-app-57e62",
    storageBucket: "nba-app-57e62.appspot.com",
    messagingSenderId: "516747975733"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}