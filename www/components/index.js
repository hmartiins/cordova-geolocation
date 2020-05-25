var onSuccess = async (position) => {
  await alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
};

function onError(error) {
  alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
window.onload = function() {
  L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

  var map = L.mapquest.map('map', {
    center: [-24.281809, -46.987543],
    layers: L.mapquest.tileLayer('map'),
    zoom: 16
  });
  L.marker([-24.281809, -46.987543], {
    icon: L.mapquest.icons.marker(),
    draggable: false
  }).bindPopup('Etec de Peruíbe').addTo(map);
  
  map.addControl(L.mapquest.control());
}