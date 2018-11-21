import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyChp9P_gV4hMbjY4U1NIOPR3LdBUWze8vc",
    authDomain: "tiinvn-ae328.firebaseapp.com",
    databaseURL: "https://tiinvn-ae328.firebaseio.com",
    projectId: "tiinvn-ae328",
    storageBucket: "tiinvn-ae328.appspot.com",
    messagingSenderId: "154859064122"
};

export default firebaseConf = firebase.initializeApp(config);