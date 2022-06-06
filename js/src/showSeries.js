
function getRatingForSeries(title, ratings, rating){
    ratings.forEach(element => {
        console.log("Serie: " + title + "\nRating: " + element.ratedSeries);
        if (element.ratedSeries === title){
            rating.score = element.score;
            rating.remark = element.remark;
        }
    });
}

function showSeries(serien, ratings=null){
    let counter = 0;
    serien.forEach(serie => {
        let title = serie.title;
        let genre = serie.genre;
        let provider = serie.streamedBy;
        let numOfSeasons = serie.numberOfSeasons;

        const thead = document.createElement("thead");
        thead.classList.add("py-2");
        thead.classList.add("row");

        const th = document.createElement("th");
        th.classList.add("py-2");
        th.classList.add("container");
        thead.appendChild(th);

        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.classList.add("text-decoration-none");
        divCard.classList.add("text-black");
        th.appendChild(divCard);

        // add title
        const printTitle = document.createElement("h5");
        printTitle.classList.add("card-header")
        divCard.appendChild(printTitle);

        const titleText = document.createTextNode(title);
        printTitle.appendChild(titleText);

        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        divCard.appendChild(divCardBody);

        // add genre
        const printGenre = document.createElement("h5");
        printGenre.classList.add("card-text");
        const genreText = document.createTextNode(genre);
        printGenre.appendChild(genreText);
        divCardBody.appendChild(printGenre);

        // add number of Seasons
        const printNOS = document.createElement("h5");
        printNOS.classList.add("card-text");
        const nOSText = document.createTextNode(numOfSeasons);
        printNOS.appendChild(nOSText);
        divCardBody.appendChild(printNOS);

        // add streamed Provider
        const printSB = document.createElement("h5");
        printSB.classList.add("card-text");
        const sbText = document.createTextNode(provider);
        printSB.appendChild(sbText);
        divCardBody.appendChild(printSB);

        if (ratings){
            let rating = {
                "score": 0,
                "remark": ""
            }
            getRatingForSeries(title, ratings, rating);

            const printScore = document.createElement("h5");
            printScore.classList.add("card-text");
            divCardBody.appendChild(printScore);

            const printRemark = document.createElement("h5");
            printRemark.classList.add("card-text");
            divCardBody.appendChild(printRemark);
            
            if (rating.remark){
                const scoreText = document.createTextNode(rating.score);
                printScore.appendChild(scoreText);
                const remarkText = document.createTextNode(rating.remark);
                printRemark.appendChild(remarkText);
            } else{
                const scoreText = document.createTextNode("-");
                printScore.appendChild(scoreText);
                const remarkText = document.createTextNode("");
                printRemark.appendChild(remarkText);
            }
        } 

        // edit button
        const editButton = document.createElement("button");
        editButton.setAttribute('id', 'editButton' + counter)

        // Es sollen in den localen Storage jeweils die Daten reingeschrieben werden, die ich auf der nächsten Seite brauche.
        // Leider kann ich sie auf der nächsten Seite nicht so Abrufen, wie ich das gerne hätte.
        editButton.addEventListener("click", function(click) {
                window.localStorage.setItem("title", title);
                window.localStorage.setItem("genre",genre);
                window.localStorage.setItem("nOS", numOfSeasons);
                window.localStorage.setItem("streamedBy", provider);
                window.open('singelSerie.html', '_self');
        });

        editButton.classList.add("btn");
        editButton.classList.add("btn-primary");
        editButton.classList.add("container");
        editButton.classList.add("col-3");
        divCardBody.appendChild(editButton);
        const editButtonText = document.createTextNode("Edit");
        editButton.appendChild(editButtonText);

        const hide = document.getElementById("hide");
        const element = document.getElementById("tableSerien");
        element.insertBefore(thead, hide);

        counter = counter + 1;

        // rate button
        const rateButton = document.createElement("button");
        rateButton.setAttribute("id","rateButton" + counter)
        rateButton.addEventListener("click",function (click) {
            window.localStorage.setItem("title",title);
            // was macht der zweite Parameter _self?
            window.open("rating.html","_self")
        });

        rateButton.classList.add("btn");
        rateButton.classList.add("btn-primary");
        rateButton.classList.add("container");
        rateButton.classList.add("col-3");

        divCardBody.appendChild(rateButton);
        const RateButtonText = document.createTextNode("Rate");
        rateButton.appendChild(RateButtonText);

    })

}
