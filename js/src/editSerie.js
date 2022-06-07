
function editSerie(){

    // Get new user input
    let title = document.getElementById("inputTitleSingleSerie").value;
    let genre = document.getElementById("inputGenreSingleSerie").value;
    let numberOfSession = document.getElementById("inputNumberOfSeasonsSingleSerie").value;
    let streamedBy = document.getElementById("inputPlattformSingleSerie").value;

    // get username from seesionStorage
    let user = window.sessionStorage.getItem("username");

    // create the url for the REST request
    let url = "http://localhost:8080/steam/api/serien/" + user + "/modify_Series";

    // create request body with a json code
    let modify = {"genre" : genre
        ,"numberOfSeasons": numberOfSession
        ,"streamedBy": streamedBy
        ,"title": title
    };


    // REST request
    fetch(url, {
        method: 'post',
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:
            JSON.stringify(modify)
    })
        .then(response => response.text())
        .then(data => {
            window.location.assign("home.html");
        })
        .catch(
            err => console.log(err)
        );
}


/*
This function will run when the singleSerie page will open
 */
function fillSiteWithData(){

    // get data from the local Storage
    let title = window.localStorage.getItem("title");
    let genre = window.localStorage.getItem("genre");
    let streamedBy = window.localStorage.getItem("streamedBy");
    let nOS = window.localStorage.getItem("nOS");

    // Fill site with Serie Data
    document.getElementById("inputTitleSingleSerie").setAttribute('value', title.toString());
    document.getElementById("inputGenreSingleSerie").setAttribute('value', genre.toString());
    document.getElementById("inputNumberOfSeasonsSingleSerie").setAttribute('value', nOS.toString());
    document.getElementById("inputPlattformSingleSerie").setAttribute('value', streamedBy.toString());

    // check in the console if the correct serie will be edit
    console.log(title);
    console.log(genre);
    console.log(streamedBy);
    console.log(nOS);

    // delete local storage
    window.localStorage.clear();
}






