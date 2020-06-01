let mode = 'map';

var onSuccess = function(position) {
  alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' );
};
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
window.onload = function () {
  L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
  var baseLayer = L.mapquest.tileLayer('map');

  var map = L.mapquest.map('map', {
    center: [-24.281809, -46.987543],
    layers: baseLayer,
    zoom: 16,
  });

  L.marker([-24.281809, -46.987543], {
    icon: L.mapquest.icons.marker(),
    draggable: false
  }).bindPopup('Etec de Peruíbe').addTo(map);

  L.control.layers({
    'Map': baseLayer
  }).addTo(map);

  var drawnItems = L.featureGroup().addTo(map);

  map.addControl(new L.Control.Draw({
    edit: {
      featureGroup: drawnItems,
      poly: {
        allowIntersection: false
      }
    },
    draw: {
      polygon: {
        allowIntersection: false,
        showArea: true
      }
    }
  }));

  map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;

    drawnItems.addLayer(layer);
  })
}