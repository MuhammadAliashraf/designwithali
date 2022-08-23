// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

  // Create DataBase link 
  
  import { getDatabase,set,ref,update,push } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
  
  // Create NewUser link 
  
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyqBtr9XswQFbJ1WlT8Ea9O6erctbjVRw",
    authDomain: "loginpro-9c3ae.firebaseapp.com",
    databaseURL: "https://loginpro-9c3ae-default-rtdb.firebaseio.com",
    projectId: "loginpro-9c3ae",
    storageBucket: "loginpro-9c3ae.appspot.com",
    messagingSenderId: "856485745568",
    appId: "1:856485745568:web:989ca7ca2d09afcf768ac5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();


    // Createing  NewUser in this Function : Start
    
    window.Signup =function(){
      var username=document.getElementById('username').value;
      var email=document.getElementById('Email').value;
      var password=document.getElementById('password').value;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          // Send Data In real-time date-Base
          var myref=ref(database, 'Users/' + user.uid);
          var newref=push(myref);
          set(newref,{
              username: username,
              email: email,
              password: password
            })
            // Send Data In real-time date-Base in the above Code:

          // Here is the things You Perform After the registration of user 
        window.location.href="index.html"// new Page open
        alert("User Register Done") // Alert Box Conformation User Register 
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("User Register Not Done")
            // ..
        })
    }
    // Createing  NewUser in this Function : End
    
    
    // This Is login Function  User Login With Email and Password!
    
    window.login=function(){
        var email=document.getElementById('Email').value;
    var password=document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        const dt = new Date();
        update(ref(database, 'Users/' + user.uid),{
            last_login : dt, 
        })
      window.location.href="index.html"// new Page open
      alert("User Loged In!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Invalid Email and Password!")
  });


}


