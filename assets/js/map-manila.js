function initMap() {
    var map = new google.maps.Map(document.getElementById("map-manila"), {
        zoom: 13,
        center: {
            lat: 14.5651,
            lng: 120.9885
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Sofitel, SM Mall of Asia & Manila Ocean Park

    var locations = [
        { lat: 14.5512, lng: 120.9811 }, 
        { lat: 14.5350, lng: 120.9827 },
        { lat: 14.5792, lng: 120.9725 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}