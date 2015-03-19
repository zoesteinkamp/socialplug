// map for search events
//jQuery(function($) {
//    // Asynchronously Load the map API
//    var script = document.createElement('script');
//    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//    document.body.appendChild(script);
//});
//
//function initialize() {
//    var map;
//    var bounds = new google.maps.LatLngBounds();
//    var mapOptions = {
//        mapTypeId: 'roadmap'
//    };
//
//    // Display a map on the page
//    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//
//    // Multiple Markers
//    var markers = [
//        ['London Eye, London', 51.503454,-0.119562],
//        ['Palace of Westminster, London', 51.499633,-0.124755]
//    ];
//
//    // Info Window Content
//    var infoWindowContent = [
//        ['<div class="info_content">' +
//        '<h3>London Eye</h3>' +
//        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
//        ['<div class="info_content">' +
//        '<h3>Palace of Westminster</h3>' +
//        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
//        '</div>']
//    ];
//
//    // Display multiple markers on a map
//    var infoWindow = new google.maps.InfoWindow(), marker, i;
//
//    // Loop through our array of markers & place each one on the map
//    for( i = 0; i < markers.length; i++ ) {
//        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//        bounds.extend(position);
//        marker = new google.maps.Marker({
//            position: position,
//            map: map,
//            title: markers[i][0]
//        });
//
//        // Allow each marker to have an info window
//        google.maps.event.addListener(marker, 'click', (function(marker, i) {
//            return function() {
//                infoWindow.setContent(infoWindowContent[i][0]);
//                infoWindow.open(map, marker);
//            }
//        })(marker, i));
//
//        // Automatically center the map fitting all markers on the screen
//        map.fitBounds(bounds);
//    }
//
//    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
//    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//        this.setZoom(14);
//        google.maps.event.removeListener(boundsListener);
//    });
//
//}



// Map for search people

//function initialize2() {
//  var mapOptions = {
//    zoom: 6
//  };
//  map = new google.maps.Map(document.getElementById('map-canvas2'),
//      mapOptions);
//
//  // Try HTML5 geolocation
//  if(navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(function(position) {
//      var pos = new google.maps.LatLng(position.coords.latitude,
//                                       position.coords.longitude);
//
//      var infowindow = new google.maps.InfoWindow({
//        map: map,
//        position: pos,
//        content: 'You'
//      });
//
//      map.setCenter(pos);
//    }, function() {
//      handleNoGeolocation(true);
//    });
//  } else {
//    // Browser doesn't support Geolocation
//    handleNoGeolocation(false);
//  }
//}
//
//function handleNoGeolocation(errorFlag) {
//  if (errorFlag) {
//    var content = 'Error: The Geolocation service failed.';
//  } else {
//    var content = 'Error: Your browser doesn\'t support geolocation.';
//  }
//
//  var options = {
//    map: map,
//    position: new google.maps.LatLng(60, 105),
//    content: content
//  };
//
//  var infowindow = new google.maps.InfoWindow(options);
//  map.setCenter(options.position);
//}
//
//google.maps.event.addDomListener(window, 'load', initialize2);jQuery(function($) {
//    // Asynchronously Load the map API
//    var script = document.createElement('script');
//    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//    document.body.appendChild(script);
//});
//
//function initialize() {
//    var map;
//    var bounds = new google.maps.LatLngBounds();
//    var mapOptions = {
//        mapTypeId: 'roadmap'
//    };
//
//    // Display a map on the page
//    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//
//    // Multiple Markers
//    var markers = [
//        ['London Eye, London', 51.503454,-0.119562],
//        ['Palace of Westminster, London', 51.499633,-0.124755]
//    ];
//
//    // Info Window Content
//    var infoWindowContent = [
//        ['<div class="info_content">' +
//        '<h3>London Eye</h3>' +
//        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
//        ['<div class="info_content">' +
//        '<h3>Palace of Westminster</h3>' +
//        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
//        '</div>']
//    ];
//
//    // Display multiple markers on a map
//    var infoWindow = new google.maps.InfoWindow(), marker, i;
//
//    // Loop through our array of markers & place each one on the map
//    for( i = 0; i < markers.length; i++ ) {
//        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//        bounds.extend(position);
//        marker = new google.maps.Marker({
//            position: position,
//            map: map,
//            title: markers[i][0]
//        });
//
//        // Allow each marker to have an info window
//        google.maps.event.addListener(marker, 'click', (function(marker, i) {
//            return function() {
//                infoWindow.setContent(infoWindowContent[i][0]);
//                infoWindow.open(map, marker);
//            }
//        })(marker, i));
//
//        // Automatically center the map fitting all markers on the screen
//        map.fitBounds(bounds);
//    }
//
//    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
//    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//        this.setZoom(14);
//        google.maps.event.removeListener(boundsListener);
//    });
//
//}



//function initialize() {
//  var myLatlng = new google.maps.LatLng(37.767711, -122.446803);
//  var mapOptions = {
//    zoom: 15,
//    center: myLatlng
//  }
//  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//  var marker = new google.maps.Marker({
//      position: myLatlng,
//      map: map,
//      title: 'Hello World!'
//  });
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);

var newlocation;
 var currentlocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            newlocation = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);

        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
    return newlocation;
}
currentlocation();


swampdragon.ready(function () {
     var locations = [];
    swampdragon.open(function() {
        // Subscribing to all channels provided by the foo-router
        swampdragon.subscribe('locationcurrent', 'local-channel', null, function (context, data) {
            this.dataMapper = new DataMapper(data);
            console.log(data)
        }, function (context, data) {
            // subscription failed
        });

        // Unsubscribe
        swampdragon.unsubscribe('locationcurrent', 'local-channel', null, function (context, data) {
            // successfully unsubscribed
        }, function (context, data) {
            // unsubscribe failed
        });

        // neither user, username, 'user.username' work, i can update location but something weird is
        // happening with the user.

        var values = {userid: "holly", location: "SF"};

        swampdragon.create('locationcurrent', values, function (context, data) {
            console.log("data created");
            console.log(data);
            console.log(context)
        }, function (context, data) {
            console.log("You may not be created")
        } );

        var data2 = {'user.username': "zoe", location: 'hi world', id: 1};
        swampdragon.update( 'locationcurrent', data2, function (context, data) {
            console.log("Yay I work!")
        }, function (context, data) {
            console.log("No updates for you")
        } );



        swampdragon.getList('locationcurrent', {id:1}, function (context, data) { // this fully works
            var datanew = data;
            console.log(datanew);
            location();
            function location(){
            for (key in datanew) {

                locations.push([datanew[key]['user.username'], datanew[key].location]);
                console.log(datanew[key])
            }
                mapsearch(locations);
            }

        }, function (context, data) {
            console.log("help no more data, it failed!")
        });
    });
});



            function mapsearch(locations) {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: new google.maps.LatLng(37.767711, -122.446803),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                var infowindow = new google.maps.InfoWindow();

                var marker, i;

                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));

                }
            }