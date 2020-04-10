// Initialize and add the map
function initMap() {
    // The location of Uluru
    var nyc = {
        lat: 40.7128,
        lng: -74.0060
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: nyc,
            mapTypeId: 'satellite',
            disableDefaultUI: true
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: nyc,
        map: map
    });
}



//fetch("http://localhost:3000/apiMap")
//  .then(res => {
//     console.log(res)
// })

const APIKey = function () {
    $.get("http://localhost:3000/apiMap", res => {
        return res
    });
}