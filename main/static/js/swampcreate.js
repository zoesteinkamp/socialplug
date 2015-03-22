swampdragon.ready(function () {
    console.log(user);
    swampdragon.open(function() {
        // Subscribing to all channels provided by the foo-router
        swampdragon.subscribe('locationcurrent', 'create-channel', null, function (context, data) {
            this.dataMapper = new DataMapper(data);
            console.log("we are subscribed")
        }, function (context, data) {
            console.log("Failure to subscribe")
        });


        swampdragon.getList('locationcurrent', {}, function(context,data){
            swampdragon.getSingle('locationcurrent', {id: swamp}, function (context, person) {
                    console.log(data);

                var newlocation= null;

                var currentlocation = function() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            newlocation = (position.coords.latitude + "," +
                                position.coords.longitude);
                            console.log(newlocation);
                            patience(newlocation);

                        });
                    } else {
                        // Browser doesn't support Geolocation
                        handleNoGeolocation(false);
                    }
                };
                currentlocation();



                function patience(newlocation){
                    data.forEach(function (item) {
                        if (item.id == swamp) {
                            if (item.latitude == person.latitude && item.longititude == person.longititude) {
                                console.log("All good to go, we have you here");
                            }
                            else {
                                update(newlocation);
                            }
                        }
                        else {
                             swampy(newlocation);
                        }
                    });
                }

                function update(locationup){
                    var latitudenew = locationup.latitude;
                    var longitudenew = locationup.longitude;
                    console.log("location", latitudenew, longitudenew);
                    swampdragon.update('locationcurrent', {user: user, latitude: latitudenew, longititude: longitudenew, username: username}, function (context, data) {
                        console.log("data created", data);
                    }, function (context, data) {
                        console.log("You may not be updated")
                    });
                }

                function swampy(locationc) {
                    var latitudenew = locationc.latitude;
                    var longitudenew = locationc.longitude;
                    console.log("location", latitudenew, longitudenew);
                    swampdragon.create('locationcurrent', {user: user, latitude: latitudenew, longititude: longitudenew, username: username}, function (context, data) {
                        console.log("data created", data);
                    }, function (context, data) {
                        console.log("You may not be created")
                    });
                }


            });
    });
    });

});