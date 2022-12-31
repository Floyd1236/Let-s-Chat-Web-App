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

localStorage.setItem("user_name", user_name);

window.location = "chat_room.html";