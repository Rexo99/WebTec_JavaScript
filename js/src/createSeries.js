function createSeries(){
    let title = document.getElementById("seriesTitle").value;
    let genre = document.getElementById("inputGenre").value;
    let plattform = document.getElementById("inputPlattform").value;
    let seasons = 1;
    try {
        seasons = parseInt(document.getElementById("seriesSeasons").value);
    } catch {
        alert("Staffeln muss eine zahl sein!");
        return;
    }
    let serie = {
        "genre": genre,
        "numberOfSeasons": seasons,
        "streamedBy": plattform,
        "title": title
    }
    let url = "http://localhost:8080/steam/api/serien/Luca/create_Series"

    fetch(url,{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serie)
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("response").innerHTML = data;
        })
        .catch(err => console.error(err));
    document.getElementById("outputText").innerHTML = serie.title + "<br>" + serie.genre + "<br>" + serie.streamedBy + "<br>" + serie.numberOfSeasons;
}