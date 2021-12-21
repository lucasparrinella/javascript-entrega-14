const URLApi = "https://thesimpsonsquoteapi.glitch.me/quotes";

$.get(URLApi, (response, status) => {

    var counter = 0;

    if(status === "success"){
        $("#btn").click(function (event) {
            $("body").append(
                `<div class="container">
                    <tr>${counter+1}</tr> <br>
                    ${response[counter].character} <br>
                    ${response[counter].quote} <br>
                    <img src="${response[counter].image}"></img> <br>
                </div>`
            );
                counter++;
        });
    }
}

);