var firebaseConfig = {
    apiKey: "AIzaSyAyyKrd47dHH3kR6RwQGk39IW2bEyyQlJ4",
    authDomain: "kwitter-7fb0e.firebaseapp.com",
    databaseURL: "https://kwitter-7fb0e-default-rtdb.firebaseio.com",
    projectId: "kwitter-7fb0e",
    storageBucket: "kwitter-7fb0e.appspot.com",
    messagingSenderId: "726687935171",
    appId: "1:726687935171:web:24abb49749ed3103b85076"
  };

firebase.initializeApp(firebaseConfig);

function addUser() 
{
    un = document.getElementById("username").value ;
    localStorage.setItem("User-Name", un) ;
    window.location = "kwitter_room.html" ;
}