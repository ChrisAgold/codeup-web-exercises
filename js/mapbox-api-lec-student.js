/**********************************************
 *            SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 *            CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

// Initialize the map
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map', // ID
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4', // 2-D View
    center: [-98.4916, 29.4252],
    zoom: 9,
});


//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 *                    MARKERS                 *
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
var marker = new mapboxgl.Marker({ // add options inside Marker, can get data based on where marker is placed //
    draggable: true,
    color: 'green',
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);
// TODO TOGETHER: Change the color of the marker


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 *                    POPUPS                  *
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.48961921534078, 29.42751457982857])
//     .setHTML("<p>Codeup Rocks!</p>")
//     //.setMaxWidth("300px")//
//     .addTo(map);
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
var alamoPopup = new mapboxgl.Popup()
    // .setHTML("<p>Remember the Alamo!</p>")
    .addTo(map);

marker.setPopup(alamoPopup);

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
var popup = new mapboxgl.Popup({
    closeOnMove: true,
})
    .setLngLat([-98.61423295397765, 29.556759243355184])
    .setText("Nama Ramen")
    .addTo(map)

/**********************************************
 *                    Geocoder                *
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding

let searchString = prompt("What would you like to search?"); // Enter "600 Navarro St #350, San Antonio, TX 78205" in prompt in browser

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
geocode(searchString, mapboxToken).then(function(result){
    console.log(result);
    //map.setCenter(result); //setCenter
    //map.jumpTo(result);
    map.flyTo({
        center: result,
        zoom: 14,
        speed: 1,
        curve: 1,
    }).then(function() {
        marker.setLngLat(result)
    });
    //map.setZoom(20);

    // Want to add popup that displays the name of the location
    marker.setPopup(result);
    reverseGeocode(result, mapboxToken).then(function(placename) {
        popup.setText(placename);
        marker.setPopup(popup);

    })
});

//TODO: Using the geocode method above, add a popup to the marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()
geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxToken).then(function(result){
    console.log(result);
    //map.setCenter(result); //setCenter
    map.jumpTo({center:result});
    //map.flyTo({center:result});
    map.setZoom(20);
    marker.setLngLat(result);
    marker.setPopup(result);
});


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
//reverseGeocode()
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


