/* Houses- JavaScript */
$(document).ready(function(){
    // use ajax() to load h04t04-ajax-json-talot.json file
    // call showHouses from done()-function
    $.ajax({
        type:"GET",
        url:"talotiedot.json",

    }).done(function(data){
        showHouses(data);
    })
});

// function shows houses information
function showHouses(data) {
    // loop through all houses data 
    $.each(data.houses, function(index, house) {
        // create a div element and add "houseContainer" class to it
        var div = $("<div></div>").addClass("houseContainer");
        // create img element and use "houseImage" class to it and src to house image
        var image = $("<img>").addClass("houseImage").attr("src", house.image);
        // create p element, use address as a text and "header" class
        var header = $("<p></p>").text(house.address).addClass("header");
        // create p element ja use house size as a text
        var size = $("<p></p>").text(house.size);
        // create p element and use house text as a text and "text" class
        var text = $("<p></p>").text(house.text).addClass("text");
        // create p element and use house price as a text
        var price = $("<p></p>").text(house.price);
        //  add all elements to houseDiv lisÃ¤tÃ¤Ã¤n kaikki luodut elementit taloDiv-elementtiin
        div.append(image,header,size,text,price);
        // add div to #houses in DOM
        $("#houses").append(div);
    });
}
