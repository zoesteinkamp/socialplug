//swampdragon.ready(function () {
//    console.log(user);
//    swampdragon.open(function() {
//        // Subscribing to all channels provided by the foo-router
//        swampdragon.subscribe('locationcurrent', 'local-channel', null, function (context, data) {
//            this.dataMapper = new DataMapper(data);
//            console.log("we are subscribed")
//        }, function (context, data) {
//            console.log("Failure to subscribe")
//        });
//
//        function swampy(locationc) {
//            swampdragon.create('locationcurrent', {user: user, location: locationc}, function (context, data) {
//                console.log("data created");
//                console.log(data);
//                getdata();
//            }, function (context, data) {
//                console.log("You may not be created")
//            });
//        }
//
//        var currentlocation = function() {
//            if (navigator.geolocation) {
//                navigator.geolocation.getCurrentPosition(function (position) {
//                    var newlocation = new google.maps.LatLng(position.coords.latitude,
//                        position.coords.longitude);
//                    console.log(newlocation);
//                    swampy(newlocation);
//                }, function() {
//
//                });
//            } else {
//                // Browser doesn't support Geolocation
//                handleNoGeolocation(false);
//            }
//            return newlocation;
//        };
//        currentlocation();
//    });
//
//});
console.log("booo")