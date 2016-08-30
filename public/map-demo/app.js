var initMap = function() {

  var library = {
    lat: 42.0484376,
    lng: -87.67997220000001
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: library,
    zoom: 16
  });

  var placeService = new google.maps.places.PlacesService(map);

  var processResults = function(results, status, pagination) {
    results.forEach(function(result) {
      $('#search-table-body').append('<tr><td>' + result.name + '</td><td>' + result.formatted_address + '</td><td>' + result.geometry.location.lat() + '</td><td>' + result.geometry.location.lng() + '</td></tr>');
      new google.maps.Marker({
        position: new google.maps.LatLng(result.geometry.location.lat(), result.geometry.location.lng()),
        map: map,
        title: result.name,
      });
    });
  };

  $('#search-button').click(function() {
    placeService.textSearch({
      location: library,
      radius: 2,
      query: $('#address').val()
    }, processResults);
  });

}
