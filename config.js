import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCUV48ry0VxnUwVOTOgqkcJ3F2yPEecOOg",
    authDomain: "team-voting-d7826.firebaseapp.com",
    projectId: "team-voting-d7826",
    storageBucket: "team-voting-d7826.appspot.com",
    messagingSenderId: "30758355298",
    appId: "1:30758355298:web:719ca729a583017bb62c3b"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();