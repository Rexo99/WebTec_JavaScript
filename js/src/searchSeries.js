

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
            //window.location.assign('searchResult.html');
            showSeries(data);
            //document.getElementById("answer").innerHTML = 'REST answer: ' + data[0].title;
        })
        .catch(
            err => document.getElementById("answer").innerHTML = 'Fetch error ' + err
        );
}


function showAllSeriesOfUserWithRating(){
    let user = window.sessionStorage.getItem("username");
    let url = "http://localhost:8080/steam/api/serien/" + user;
    let seriesData;

    fetch(url, {
        method: "get",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            let score =0;
            let ratings = [];
            data.forEach(element => {
                console.log("Suche Rating für: " + element.title);
                let ratingUrl = "http://localhost:8080/steam/api/serien/" + user + "/" + element.title + "/rating";
                fetch(ratingUrl,{
                    method: "get",
                    headers: {
                        "Accept": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(ratingData => {
                        if (ratingData.length == 1){
                            console.log("befuelle ratings");
                            ratings.push(ratingData[0]);
                        }
                        score++;
                        if (score == data.length){
                            console.log("ratings befuellt: " + ratings.length);
                            showSeries(data,ratings);
                        }
                    })
                    .catch(error => console.log(error));
            });
        })
        .catch(error => console.log(error));
}