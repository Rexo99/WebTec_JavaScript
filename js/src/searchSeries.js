

function serachSerie(user){
    console.log(user);
    // Unfortunately, I do not know how this works with the registration.
    let url = 'http://localhost:8080/steam/api/serien/' + user + '/search';

    let username = document.getElementById("username").value;
    let genre = document.getElementById('inputGenre').value;
    let plattform = document.getElementById('inputPlattform').value;
    let score = document.getElementById('inputScore').value;

    let search = {"username" : user,
        "genre": genre
        //,"provider": plattform
        //,"Score": score
    };

    console.log(search);


    // Try to connect to the REST-interface
    fetch(url, {
        method: 'post',
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
            // "Access-Control-Allow-Origin": "*"
        },
        body:
            JSON.stringify(search)
    })
        .then(response => response.json())
        .then(data => {

            // check if data is empty
            if(data.length < 1){
                window.alert("Keine Serien gefunden");
            } else {
                window.location.assign('../../html/searchResult.html')
                showSeries(data);
            }

        })
        .catch(
            err => document.getElementById("answer").innerHTML = 'Fetch error ' + err
        );
}


