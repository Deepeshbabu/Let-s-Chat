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

  un = localStorage.getItem("User-Name") ;      
  document.getElementById("username").innerHTML = "Welcome " + un + " !" ;

  function addroom() 
  {
      rnm = document.getElementById("rnm").value ;

      firebase.database().ref("/").child(rnm).update({ purpose : "adding room name" }) ;

      localStorage.setItem("room-name", rnm) ;

      window.location = "kwitter_page.html" ;
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names From Firebase " + Room_names) ;
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'># "+Room_names+"</div><hr style='height:2px;border-width:1;color:whitesmoke;background-color:whitesmoke'>" ;
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
      getData();
      
      function redirectToRoomName(name) 
      {
          console.log(name);
          localStorage.setItem("room-name", name) ;
          window.location = "kwitter_page.html" ;
      }
    
      function Logout() 
      {
        localStorage.removeItem("room-name") ;
        localStorage.removeItem("User-Name") ;
        window.location = "index.html" ;
      }