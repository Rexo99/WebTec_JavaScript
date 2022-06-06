function createRating() {
    let user = window.sessionStorage.getItem("username");

    let ratedSeries = window.localStorage.getItem("title");
    localStorage.clear();
    let score = document.getElementById("inputScore").value;
    let remark = document.getElementById("inputRemark").value;


    let rating = {
        "ratedSeries": ratedSeries,
        "ratingUser": user.toString(),   //vielleicht kein String
        "score": score,
        "remark": remark
    }
    console.log(rating);

    let url = "http://localhost:8080/steam/api/serien/" + user + "/rate";

    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rating)
    })
        .then(response => response.text())
        .then(data => {
            //window.location.assign("home.html")
        });

}
function initialize(){
    // Setting the label to rated Series
    let ratedSeries = window.localStorage.getItem("title")
    document.getElementById("seriesLabel").innerHTML = "Series: " + ratedSeries;
}
initialize();
