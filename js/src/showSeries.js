
function showSeries(serien){
    document.getElementById("test").innerHTML = "Hallöchen";
    serien.forEach(serie => {
        let title = serie.title;
        let genre = serie.genre;
        let provider = serie.streamedBy;
        let numOfSeasons = serie.numberOfSeasons;

        const thead = document.createElement("thead")


        const th = document.createElement("th");
        thead.appendChild(th);

        const divCard = document.createElement("div");
        th.appendChild(divCard);

        // add title
        const printTitle = document.createElement("h5");
        divCard.appendChild(printTitle);

        const titleText = document.createTextNode(title);
        printTitle.appendChild(titleText);

        const divCardBody = document.createElement("div");
        divCard.appendChild(divCardBody);

        // add genre
        const printGenre = document.createElement("h5")
        const genreText = document.createTextNode(genre);
        printGenre.appendChild(genreText);
        divCardBody.appendChild(printGenre);

        // add number of Seasons
        const printNOS = document.createElement("h5");
        const nOSText = document.createTextNode(numOfSeasons);
        printNOS.appendChild(nOSText);
        divCardBody.appendChild(printNOS);

        // add streamed Provider
        const printSB = document.createElement("h5");
        const sbText = document.createTextNode(provider);
        printSB.appendChild(sbText);
        divCardBody.appendChild(printSB);

        const editButton = document.createElement("button");
        divCardBody.appendChild(editButton);

        const hide = document.getElementById("hide");
        const element = document.getElementById("tableSerien");
        element.insertBefore(thead, hide);

    })
}

