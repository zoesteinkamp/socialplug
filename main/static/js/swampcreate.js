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

        //var currentlocation = function() {
        //    if (navigator.geolocation) {
        //        navigator.geolocation.getCurrentPosition(function (position) {
        //            var newlocation = (position.coords.latitude + "," +
        //                position.coords.longitude);
        //            console.log(newlocation);
        //            swampy(position.coords);
        //        }, function() {
        //
        //        });
        //    } else {
        //        // Browser doesn't support Geolocation
        //        handleNoGeolocation(false);
        //    }
        //    return null;
        //};
        //currentlocation();
        //
        //
        //var swampy = function(locationc) {
        //    swampdragon.getList('locationcurrent', {id:1}, function(context,person){
        //    var latitudenew = locationc.latitude;
        //    var longitudenew = locationc.longitude;
        //    console.log("location", latitudenew, longitudenew);
        //
        //    for(key in person){
        //        var per = person[key];
        //    }
        //
        //    if (per.user == user && per.username == username){
        //        console.log(per.latitude + " " + per.longititude);
        //        if(per.latitude == latitudenew && per.longititude != longitudenew ||
        //        per.latitude != latitudenew && per.longititude == longitudenew ||
        //        per.latitude != latitudenew && per.longititude != longitudenew){
        //            var id = per.id;
        //            swampdragon.update('locationcurrent', {user: user, latitude: latitudenew , longititude: longitudenew, username: username, id: id}, function (context, data) {
        //                console.log("data updated", data);
        //                swampdragon.unsubscribe('locationcurrent', 'create-channel', null, function (context, data){
        //                    console.log("Im out for now")
        //                })
        //            }, function (context, data) {
        //                console.log("You may not be updated")
        //                swampdragon.unsubscribe('locationcurrent', 'create-channel', null, function (context, data){
        //                    console.log("Im out for now")
        //                })
        //            });
        //        }
        //        else{
        //            console.log("No location change")
        //            swampdragon.unsubscribe('locationcurrent', 'create-channel', null, function (context, data){
        //                    console.log("Im out for now")
        //                })
        //        }
        //    }
        //    else{
        //        swampdragon.create('locationcurrent', {user: user, latitude: latitudenew , longititude: longitudenew , username: username}, function (context, data) {
        //        console.log("data created", data);
        //            swampdragon.unsubscribe('locationcurrent', 'create-channel', null, function (context, data){
        //                    console.log("Im out for now")
        //                })
        //    }, function (context, data) {
        //        console.log("You may not be created")
        //    });
        //    }
        //   });
        //}
    //
    //});
//
//});
