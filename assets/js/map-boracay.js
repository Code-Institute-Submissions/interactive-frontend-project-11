function initMap() {
    var map = new google.maps.Map(document.getElementById("map-boracay"), {
        zoom: 14,
        center: {
            lat: 11.9610,
            lng: 121.9246
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Station 2 Hennan Resort and Spa, White Beach & Bulabog Beach

    var locations = [
        { lat: 11.9610, lng: 121.9246 }, 
        { lat: 11.9524, lng: 121.9296 },
        { lat: 11.9693, lng: 121.9273 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}