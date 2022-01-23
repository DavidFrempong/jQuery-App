$(function () {

    $('.button').on('click', function () {
        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/pikachu",
            method: "GET",
            data: {
                // title: 'Top 5 Cities to Live',
                // body: 'Here are my top five players: Jordan, LeBron, Kobe, Kareem, Steph.',
                // userId: 20
            },
            // dataType: "html"
        });

        request.done(function (data) {
            console.log(data)
        });

        request.fail(function (jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error);
        });

    })

});

