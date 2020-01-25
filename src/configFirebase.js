import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAtMOtYNI_SIQqSzA671wInVelvRBx0qYs",
  authDomain: "wonderyoga-5f380.firebaseapp.com",
  databaseURL: "https://wonderyoga-5f380.firebaseio.com",
  projectId: "wonderyoga-5f380",
  storageBucket: "wonderyoga-5f380.appspot.com", 
  messagingSenderId: "221854929428",
  appId: "1:221854929428:web:0de03e1432cc040e64cd01",
  measurementId: "G-MGYJCL4NB5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database();
firebase.analytics();
