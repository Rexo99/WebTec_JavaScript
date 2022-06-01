

function serachSerie(user, serienname){
    url = user + '/searchByName/' + serienname;
    fetch(url, {
        headers: { // ich weiß leider nicht mehr was wir im header angeben müssen, damit wir eine json datei zurcü bekommen

        },
        method: 'post'
    })
        .then(status)
        .then(response => response.text())
        .then(data => {
            document.getElementById("answer").innerHTML
                    = 'REST answer: ' + data;
        })
        .catch(err => document.getElementById("answer").innerHTML
                    = 'Fetch error ' + err);
}
