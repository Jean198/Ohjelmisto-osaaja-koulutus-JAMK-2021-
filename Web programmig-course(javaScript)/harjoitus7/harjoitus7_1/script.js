function initMap(){
    //map option
    var options={
        center: { lat:62.239698, lng:25.749213 },
        zoom: 15
            }
    //new map
    map=new google.maps.Map(document.getElementById('map'),options)
   //marker
    const marker=new google.maps.Marker({
        position:{lat:62.242693, lng:25.747372},
        map:map
    
    });



//------------------------------------------------------------------------------

    var circleinfowindow=new google.maps.InfoWindow({
        content:'<h3> Harjun EK</h3>'

    });



    //circlearea
    const circlearea= new google.maps.Circle({
        center: new google.maps.LatLng(62.242110,25.738110),
        radius:400,
        strokeColor:"yellow",
        strokeOpacity: 0.9,
        strokeWeight: 7,
        fillColor: "yellow",
        fillOpacity: 0.4,
        map:map
    });



    google.maps.event.addListener(circlearea, 'click', function(ev){
    circleinfowindow.setPosition(ev.latLng);
    circleinfowindow.open(map);
});

//------------------------------------------------------------------------------------------



var rectangleinfowindow=new google.maps.InfoWindow({
    content:'<h3> "World Rally Championship - Competition Center"</h3>'

});



     //Rectangle area

     var Rectanglearea= new google.maps.Rectangle({
        strokeColor:"blue",
        strokeOpacity: 0.7,
        strokeWeight: 7,
        fillColor: "blue",
        fillOpacity: 0.4,
        bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(62.239203,25.751496),
                new google.maps.LatLng(62.237963,25.755291)
        ),

        map:map
      
    });

        google.maps.event.addListener(Rectanglearea, 'click', function(e){
        rectangleinfowindow.setPosition(e.latLng);
        rectangleinfowindow.open(map);
    });

    
    







}