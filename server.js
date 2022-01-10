function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("out_put");
    window.location = "index.html";
}


var firebaseConfig = {
    apiKey: "AIzaSyA7XFOryMqXV3CtxTEQUslEgdrUcVvUPKo",
    authDomain: "kwitter--project-15c29.firebaseapp.com",
    databaseURL: "https://kwitter--project-15c29-default-rtdb.firebaseio.com",
    projectId: "kwitter--project-15c29",
    storageBucket: "kwitter--project-15c29.appspot.com",
    messagingSenderId: "249680381267",
    appId: "1:249680381267:web:faeb73754c8a4b18abcda6",
    measurementId: "G-W0L3536NBJ"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            row = "<div style = 'color: cyan'   class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Start code

            //End code

        });
    });

}
getData();
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "";
                   
}



