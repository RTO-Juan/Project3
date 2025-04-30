var map;

var locations = {
  park: { lat: 41.8826, lng: -87.6226 },   
  pier: { lat: 41.8916, lng: -87.6079 },   
  tower: { lat: 41.8789, lng: -87.6359 }   
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8781, lng: -87.6298 }, 
    zoom: 13
  });

  var marker1 = new google.maps.Marker({
    position: locations.park,
    map: map,
    title: "Millennium Park"
  });

  var marker2 = new google.maps.Marker({
    position: locations.pier,
    map: map,
    title: "Navy Pier"
  });

  var marker3 = new google.maps.Marker({
    position: locations.tower,
    map: map,
    title: "Willis Tower"
  });
}

function panTo(key) {
  if (locations[key]) {
    map.panTo(locations[key]);
  }
}


