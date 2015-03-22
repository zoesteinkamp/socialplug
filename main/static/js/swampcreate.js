//swampdragon.ready(function () {
//    console.log(user);
//    swampdragon.open(function() {
//        // Subscribing to all channels provided by the foo-router
//        swampdragon.subscribe('locationcurrent', 'create-channel', null, function (context, data) {
//            this.dataMapper = new DataMapper(data);
//            console.log("we are subscribed")
//        }, function (context, data) {
//            console.log("Failure to subscribe")
//        });
//
//        swampdragon.getList('locationcurrent', {id:1}, function(context,data){
//            console.log(data)
//        });
//        function swampy(locationc) {
//            var latitudenew = locationc.latitude;
//            var longitudenew = locationc.longitude;
//            console.log("location", latitudenew, longitudenew);
//            swampdragon.create('locationcurrent', {user: user, latitude: latitudenew , longititude: longitudenew , username: username }, function (context, data) {
//                console.log("data created", data);
//            }, function (context, data) {
//                console.log("You may not be created")
//            });
//        }
//
//        var currentlocation = function() {
//            if (navigator.geolocation) {
//                navigator.geolocation.getCurrentPosition(function (position) {
//                    var newlocation = (position.coords.latitude + "," +
//                        position.coords.longitude);
//                    console.log(newlocation);
//                    swampy(position.coords);
//                }, function() {
//
//                });
//            } else {
//                // Browser doesn't support Geolocation
//                handleNoGeolocation(false);
//            }
//            return null;
//        };
//        currentlocation();
//    });
//
//});