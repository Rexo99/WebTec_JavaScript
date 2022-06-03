
function login() {
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;


    let user = {
        "username": username,
        "password": password
    }
    let url = 'http://localhost:8080/steam/api/serien/LogIn';
    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            "Accept": 'application/json'
        }, 
        body: JSON.stringify(user)
    })
    .then(function (response) {
        if (response.status === 200) {
            window.sessionStorage.setItem("username", username)
            window.open("home.html", "_self")
        }
        else if (response.status === 401) {
            document.getElementById("output").innerHTML = "Wrong username or password.";
        }
    } ).catch(response => console.log("Error: " + response))
}


function register() {
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;

    let user = {
        "username": username,
        "password": password
    }

    let url = "http://localhost:8080/steam/api/serien/registerUser";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(user)
    })
    .then(function (response) {
        if (response.status === 201) {
            window.sessionStorage.setItem("username", username)
            window.open("home.html", "_self")
        }
        else if (response.status === 409) {
            document.getElementById("output").innerHTML = "Username already exists"
        }
    })
}

function clearStorage() {
    window.sessionStorage.clear();
}


