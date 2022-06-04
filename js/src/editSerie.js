
function editSerie(){
    let title = window.localStorage.getItem("title");
    let genre = window.localStorage.getItem("genre");

    //let title = document.getElementById("inputTitle").value
    //let genre = document.getElementById("inputGenre").value
    let numberOfSession = document.getElementById("inputNumberOfSeasons").value;
    let streamedBy = document.getElementById("inputPlattform").value;
    document.getElementById("inputNumberOfSeasons").innerHTML = numberOfSession;
    document.getElementById("inputPlattform").innerHTML = streamedBy;
    let user = window.sessionStorage.getItem("username");
    let url = "localhost:8080/steam/api/serien/" + user + "/modify_Series";
    let modify = {"genre" : genre
        ,"numberOfSeasons": numberOfSession
        ,"streamedBy": streamedBy
        ,"title": title
    };

    fetch(url, {
        method: 'post',
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
            // "Access-Control-Allow-Origin": "*"
        },
        body:
            JSON.stringify(modify)
    })
        .then(response => response.json())
        .then(data => {
            if(data.length === 0){
                window.alert("Keine Serie gefunden");
            } else if(data.length < 1) {
                window.alert("Es sind mehrere Serien gefunden worden!")
            } else {
                window.location.assign("home.html");
            }

        })
        .catch(
            err => document.getElementById("answer").innerHTML = 'Fetch error ' + err
        );
}






