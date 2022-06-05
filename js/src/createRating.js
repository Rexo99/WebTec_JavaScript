function createRating() {
    let user = window.sessionStorage.getItem("username");

    let ratedSeries; //type String
    let score = document.getElementById("inputScore").value;
    let remark = document.getElementById("inputRemark").value;

    let rating = {
        "ratedSeries": "Dinotopia reloaded",
        "ratingUser": user,   //vielleicht kein String
        "score": score,
        "remark": remark
    }

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
            window.location.assign(home.html)
        });
}