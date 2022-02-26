var firebaseConfig = {
      apiKey: "AIzaSyDZU4njV32S0mIRRwNJ7Yl5RaYrCin6LmU",
      authDomain: "kwitter-b947a.firebaseapp.com",
      databaseURL: "https://kwitter-b947a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b947a",
      storageBucket: "kwitter-b947a.appspot.com",
      messagingSenderId: "704644084789",
      appId: "1:704644084789:web:70e97e38cc0757a91f2d7c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function add_room(){
var room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"Your Changes Have been saved!"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}

function logout(){

 window.location="index.html";
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
}