import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC0xPmqywhLcexY9ixw_7zJtHC0r45232A",
  authDomain: "wonderyoga-604cb.firebaseapp.com",
  databaseURL: "https://wonderyoga-604cb.firebaseio.com",
  projectId: "wonderyoga-604cb",
  storageBucket: "wonderyoga-604cb.appspot.com",
  messagingSenderId: "653229875876",
  appId: "1:653229875876:web:69e277c8dce5f8615c3c31",
  measurementId: "G-Y1JWDXCM30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


