let map;

const locations = {
  park: { lat: 41.8826, lng: -87.6226 },   // Millennium Park
  pier: { lat: 41.8916, lng: -87.6079 },   // Navy Pier
  tower: { lat: 41.8789, lng: -87.6359 }   // Willis Tower
};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

google.maps.event.addDomListener(window, 'load', initMap);


