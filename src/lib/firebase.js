import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCedbyfHqTPAzs4TD6Dgm26b_Czj6pilKc",
    authDomain: "instagram-ecdc3.firebaseapp.com",
    projectId: "instagram-ecdc3",
    storageBucket: "instagram-ecdc3.appspot.com",
    messagingSenderId: "748824037197",
    appId: "1:748824037197:web:1421ee952600003d9f5904",
    measurementId: "G-DMBE5TM5CW"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };