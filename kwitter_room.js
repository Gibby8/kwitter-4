var firebaseConfig = {
      apiKey: "AIzaSyBOgZj5qQ78vmFvMczd_HYE8S9L5gdVJpo",
      authDomain: "kwittertestapp.firebaseapp.com",
      databaseURL: "https://kwittertestapp-default-rtdb.firebaseio.com",
      projectId: "kwittertestapp",
      storageBucket: "kwittertestapp.appspot.com",
      messagingSenderId: "228699547708",
      appId: "1:228699547708:web:1fc6e596862fb837f0bb39"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
};

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();
function redirectToRoomName(name){
      console.log(name);
      console.log("redirect ");
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
};
