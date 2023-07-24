
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAIEcIObuNmnuIEUqbcQpagTjkYSgCtijA",
      authDomain: "kwitter-f0a66.firebaseapp.com",
      projectId: "kwitter-f0a66",
      storageBucket: "kwitter-f0a66.appspot.com",
      messagingSenderId: "793957984598",
      appId: "1:793957984598:web:c2e5393be35444b7848ef7",
      measurementId: "G-TT49X2PT2Q"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data['name'];
     message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
     like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

     row = name_with_tag + message_with_tag +like_button + span_with_tag;
     document.getElementById("output").innnerHTML += row;
      //End code
      });});}
getData();


function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_is = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(Likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(messsage_id).update({
            likes : updated_likes
      })
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}