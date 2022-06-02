

function serachSerie(user){

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

    document.getElementById("answer").innerHTML = "Es klappt";

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
            // window.location.assign('searchResult.html');
            showSeries(data);
            //document.getElementById("answer").innerHTML = 'REST answer: ' + data[0].title;
        })
        .catch(
            err => document.getElementById("answer").innerHTML = 'Fetch error ' + err
        );
}


