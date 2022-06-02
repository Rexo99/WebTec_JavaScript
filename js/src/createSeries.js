/*
 * creates a series with given inputs.
 */
function createSeries(){
    let title = document.getElementById("seriesTitle").value;
    let genre = document.getElementById("inputGenre").value;
    let plattform = document.getElementById("inputPlattform").value;
    let seasons = document.getElementById("seriesSeasons").value;
    if (isNaN(seasons)) {
        alert("Staffeln muss eine zahl sein!");
        return;
    }
    let serie = {
        "genre": genre,
        "numberOfSeasons": seasons,
        "streamedBy": plattform,
        "title": title
    }
    let url = "http://localhost:8080/steam/api/serien/Luca/create_Series";

    fetch(url,{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serie)
        })
        .then(response => response.text())
        .then(data => {
            window.location.assign("home.html");
        })
        .catch(err => console.error(err));
}

/*
 * checks if all inputs are valid.
 */
function checkInput(){
    document.getElementById("createButton").disabled = false;
    document.getElementById("errorText").innerHTML = "";
    let seasons = document.getElementById("seriesSeasons").value;
    if (isNaN(seasons)) {
        document.getElementById("createButton").disabled = true;
        document.getElementById("errorText").innerHTML += "Staffeln muss eine Zahl sein.<br>"
    } 

    let title = document.getElementById("seriesTitle").value;
    if(!title){ //checks if title is null or empty (truthy / falsy)
        document.getElementById("createButton").disabled = true;
        document.getElementById("errorText").innerHTML += "Bitte einen Titel eingeben."
    }
}