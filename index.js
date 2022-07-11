// var firebaseConfig = {
//     apiKey: "AIzaSyAf0P6f6wUepuynZ8ih8lU2U2K-x2W1e8g",
//     authDomain: "sih-website2022.firebaseapp.com",
//     projectId: "sih-website2022",
//     storageBucket: "sih-website2022.appspot.com",
//     messagingSenderId: "262578655475",
//     appId: "1:262578655475:web:9fb9b16e5d47e11cc66786"
// };

// firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()


function register() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return

    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}


function login() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}




// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("./movie.html")
    }
})