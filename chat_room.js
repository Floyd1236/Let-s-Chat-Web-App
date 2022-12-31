var firebaseConfig = {
    apiKey: "AIzaSyDfizsF_u5NgUs5vUymPvzmFYeZwNPrs1k",
    authDomain: "lets-chat-web-app-80e32.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-80e32-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-80e32",
    storageBucket: "lets-chat-web-app-80e32.appspot.com",
    messagingSenderId: "115226572769",
    appId: "1:115226572769:web:fc3782be3dce34a84044a0"
  };
  
firebase.appIdinitializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;

   });});}
getData();