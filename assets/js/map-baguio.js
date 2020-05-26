function initMap() {
    var map = new google.maps.Map(document.getElementById("map-baguio"), {
        zoom: 14,
        center: {
            lat: 16.4089,
            lng: 120.59992
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Camp John Hay, Mines View & Burnham Park

    var locations = [
        { lat: 16.3970, lng: 120.6114 }, 
        { lat: 16.4196, lng: 120.6279 },
        { lat: 16.4114, lng: 120.5940 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}