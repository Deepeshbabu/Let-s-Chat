  var firebaseConfig = {
    apiKey: "AIzaSyAt_lR3YaY6IZXyFM2vXQTLPxw9cC9C2Mk",
    authDomain: "let-s-chat-cfaae.firebaseapp.com",
    databaseURL: "https://let-s-chat-cfaae-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-cfaae",
    storageBucket: "let-s-chat-cfaae.appspot.com",
    messagingSenderId: "974109929933",
    appId: "1:974109929933:web:7e58623110155f31e89484"
  };

    firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room-name") ;

document.getElementById("disnm").innerHTML = "#" + room_name ;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

username = localStorage.getItem("User-Name") ;

function send() 
{
  msg = document.getElementById("msg").value ;
  firebase.database().ref(room_name).push({ name : username, message : msg, like : 0 }) ;
}