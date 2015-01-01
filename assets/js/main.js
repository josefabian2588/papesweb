(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;




})(window, jQuery);

var var_map = '';

function initialize() {
   
     var var_location = new google.maps.LatLng(9.946468,-84.129717);
     var var_mapoptions = {
          center: var_location,
           scrollwheel: false,
           mapTypeControl: true,
           scaleControl: true,
          zoom: 15

        };

    var var_map = new google.maps.Map(document.getElementById('map'),  var_mapoptions);

 var contentString = 
            '<div id="infowindow_content">'+
            '<p><strong>Ubicacion</strong><br>'+
            'Del segundo Palí de Pavas 300mts norte<br>' +
            'edificio esquinero dos plantas, mano derecha<br>'+
            '</p>'+
            '</div>';
 
        var var_infowindow = new google.maps.InfoWindow({
            content: contentString
          });

    var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Click para ver mas información",
                  maxWidth: 500
                  });

    google.maps.event.addListener(var_marker, 'click', function() {
        var_infowindow.open(var_map,var_marker);
          });    
 


}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);