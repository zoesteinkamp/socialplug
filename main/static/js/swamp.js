//swampdragon.ready(function () {
//    swampdragon.open(function() {
//        // Subscribing to all channels provided by the foo-router
//        swampdragon.subscribe('locationcurrent', 'local-channel', null, function (context, data) {
//            this.dataMapper = new DataMapper(data);
//            console.log("we are subscribed")
//        }, function (context, data) {
//            console.log("Failure to subscribe")
//        });
//
//        // Unsubscribe
//        swampdragon.unsubscribe('locationcurrent', 'local-channel', null, function (context, data) {
//            console.log("We succesfully unsubsrcibed")
//        }, function (context, data) {
//            console.log("Unsubscribed failed")
//        });

        //swampy();
        //function swampy(locationc) {
        //    swampdragon.create('locationcurrent', {user: "Andre", location: locationc}, function (context, data) {
        //        console.log("data created");
        //        console.log(data);
        //        getdata();
        //    }, function (context, data) {
        //        console.log("You may not be created")
        //    });
        //}
        //
        //var currentlocation = function() {
        //    if (navigator.geolocation) {
        //        navigator.geolocation.getCurrentPosition(function (position) {
        //            var newlocation = new google.maps.LatLng(position.coords.latitude,
        //                position.coords.longitude);
        //            console.log(newlocation);
        //            swampy(newlocation);
        //        }, function() {
        //
        //        });
        //    } else {
        //        // Browser doesn't support Geolocation
        //        handleNoGeolocation(false);
        //    }
        //    return newlocation;
        //};
        //currentlocation();

        //var data2 = {'user': "zoe", location: 'die', id: 1};
        //swampdragon.update( 'locationcurrent', data2, function (context, data) {
        //    console.log("Yay I work!")
        //}, function (context, data) {
        //    console.log("No updates for you")
        //} );

        //function getdata() {
        //    swampdragon.getList('locationcurrent', {id: 1}, function (context, data) { // this fully works
        //        var datanew = data;
        //        console.log(datanew);
        //        location();
        //        function location() {
        //            for (key in datanew) {
        //
        //                locations.push([datanew[key]['user.username'], datanew[key].location]);
        //                console.log(datanew[key])
        //            }
        //            mapsearch(locations);
        //        }
        //
        //    }, function (context, data) {
        //        console.log("help no more data, it failed!")
        //    });
        //};
        //var deletedata = {id: 4};
        //swampdragon.delete('locationcurrent', deletedata, function (context, data) {
        //    console.log(data + "Is outta here!")
        //}, function (context, data) {
        //    console.log("No deleting today")
        //} );
//    });
//});
