$(document).ready(function(){
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUWLRqAVRpW-7rB_xAVcCZpPriy-pcxRE",
    authDomain: "boggle-game-8750b.firebaseapp.com",
    databaseURL: "https://boggle-game-8750b.firebaseio.com",
    projectId: "boggle-game-8750b",
    storageBucket: "boggle-game-8750b.appspot.com",
    messagingSenderId: "1030572089787",
    appId: "1:1030572089787:web:0eab488878160d8831e49e"
 };
  // Initialize Firebase

//ADD firebase JSON data here as let firebaseConfig = { STUFF YOU COPY PASTE FROM DASHBOARD }
//Also don't forget to include firebase-auth sdk
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (!!user){
    alert(`${user.displayName || user.email}`);
  }
});

  $("#loginemail").click(()=>{
    firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  });
  $("#register").click(()=>{
    let pwd1 = $("#password").val();
    let pwd2 = $("#password2").val();
    if (pwd1 == pwd2){
      firebase.auth().createUserWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    } else {
      alert("passwords don't match");
    }
  });
  $("#reset").click(()=>{
    firebase.auth().sendPasswordResetEmail($("#email").val());
  });
  
});
