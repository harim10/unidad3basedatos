// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDThKmV03_t994twBfPRGX83Oziw9Ol4FE",
    authDomain: "unidad3bd.firebaseapp.com",
    projectId: "unidad3bd",
    storageBucket: "unidad3bd.appspot.com",
    messagingSenderId: "928016544470",
    appId: "1:928016544470:web:5f7b5fef25191729cfcf77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var basedatos = firebase.database();

  var app = document.getElementById('app');

  /*var coleccion = firebase.database().ref().child('mensaje');

  coleccion.on('value',(snaphot) => {
      console.log(snaphot.val())
  });*/

  var coleccion = basedatos.ref().child('mensaje');
  coleccion.on('value',(snapshot) => {
    console.log(snapshot.val());
    app.innerText = snapshot.val();
  });

  function readval(){
    var coleccion = basedatos.ref().child('users/username/');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    });
  }
  
  function readget(){
      basedatos.ref('users').child('username').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
      }
      else {
        console.log("No data available");
        app.innerText = 'No data available';
      }
    }).catch(function(error) {
      console.error(error);
    });
  }

  function writecollection() {
    basedatos.ref('users').set({
      username: "hariim",
      email: "0@gmail.com",
    });
    console.log("Agregar datos");
  }
  
   