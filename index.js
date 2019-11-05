const apiKey = keys.api;


var offset = 0;





$('button').on('click', function () {
    var item = $(this).attr("value");
    var categoryDiv = $("#categoryDiv");
    categoryDiv.text("");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        item + "&api_key=" + apiKey + "&offset=" + offset;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
            var results = response.data;
            
            for (i = 0; i < results.length; i++) {
                
                let itemImg = $("<img>");
                itemImg.attr("src", results[i].images.fixed_height.url);
                categoryDiv.append(itemImg);
            };



            // `${response[i].attr(value)}`;
        })
});