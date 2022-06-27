let markers
let map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -38.90240614502076,
        lng: -71.18537036513018,
      },
      map,
      title: "Villa Puhuenia",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -34.60347393237836,
        lng: -58.381506033836416,
      },
      map,
      title: "Obelisco",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.385734542546004,
        lng: -3.21836647725814,
      },
      map,
      title: "pedregal",
    })
  );
}
