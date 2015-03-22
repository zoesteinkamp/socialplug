swampdragon.ready(function () {
    //console.log(user);
    //console.log(swamp);
    swampdragon.open(function() {
        // Subscribing to all channels provided by the foo-router
        swampdragon.subscribe('locationcurrent', 'swampy-channel', null, function (context, data) {
            this.dataMapper = new DataMapper(data);
            console.log("we are subscribed")
        }, function (context, data) {
            console.log("Failure to subscribe")
        });


        getUser();
        function getUser() {
                swampdragon.getSingle('locationcurrent', {id: swamp}, function (context, data) {
                    swampdragon.getList('locationcurrent', {}, function (context, data2) {

                        var myLatlng = new google.maps.LatLng(data.latitude, data.longititude);
                        var mapOptions = {
                            zoom: 15,
                            center: myLatlng
                        };
                        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


                        console.log(data2);
                        console.log(data);
                        otheruser = [];
                        contentString = "";


                        data2.forEach(function(item){
                            var myloc = null;
                            if (item.user === user) {
                                myloc = new google.maps.LatLng(item.latitude, item.longititude)
                            }
                            else{
                                var compare = new google.maps.LatLng(item.latitude, item.longititude);
                                var distance = google.maps.geometry.spherical.computeDistanceBetween (myLatlng, compare);
                                if( distance > 8046.72 ){
                                    console.log("Your too damn far away!")
                                }
                                else{
                                    prettyarray = [];
                                    prettyarray.push("<h1>" + item.username + "</h1>", item.latitude, item.longititude, item.id);
                                    otheruser.push(prettyarray);
                                }
                            }
                        });


                        var infowindow = new google.maps.InfoWindow({
                            maxWidth: 160
                        });

                        var markers = new Array();
                        setMarkers(map, otheruser);
                        function setMarkers(map, locations) {
                            for (var i = 0; i < locations.length; i++) {
                                var marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                    map: map
                                });

                                markers.push(marker);

                                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                    return function () {
                                        infowindow.setContent(locations[i][0]);
                                        infowindow.open(map, marker);
                                    }
                                })(marker, i));
                            }
                        }
                        swampdragon.onChannelMessage(function (channels, message) {
                        var dragonid = message.data.id;
                        var lat = message.data.latitude;
                        var username = message.data.username;
                        var long = message.data.longititude;
                        var dragonuser = message.data.user;
                        if (message.action === "created") {
                            var compare = new google.maps.LatLng( lat, long);
                            var distance = google.maps.geometry.spherical.computeDistanceBetween (myLatlng, compare);
                            if( distance > 8046.72 ){
                               console.log("Your new marker is too damn far away!")
                            }
                            else {
                                var uglyarray = [];
                                uglyarray.push("<h1>" + username + "</h1>", lat, long, dragonid);
                                otheruser.push(uglyarray);
                                console.log(uglyarray);
                                setMarkers(map, otheruser);
                            }

                            //var array = []
                            //for (var i = 0; i < otheruser.length; i++) {
                            //     array.push(otheruser[i][3])
                            //}
                            //console.log(array)

                            //if (dragonid === array ){
                            //    console.log("You found me!")
                            //}
                        //}
                        //else if (message.action === "deleted") {
                        //    var deletearray = [];
                        //    var originarray = [];
                        //    originarray.push(["<h1>" + username + "</h1>", lat, long , dragonid]);
                        //    console.log(originarray);
                        //
                        //    for (var i = 0; i < otheruser.length; i++) {
                        //        for (var j = 0; j < originarray.length; j++){
                        //            if (otheruser[i] === originarray[j]){
                        //                var help = otheruser.remove(otheruser[i]);
                        //                Array.prototype.remove = function(value) {
                        //                       this.splice(this.indexOf(value), 1);
                        //                       return true;
                        //                };
                        //                console.log(help)
                        //                console.log(otheruser)
                        //            }
                        //            else{
                        //                console.log("Fuck")
                        //            }
                        //        }
                        //
                        //    }


        //                    setMarkers(map, otheruser);
        //
        //                }
        //                else if (message.action === "updated") {
        //
        //
        //                }
        //                else {
        //                    console.log("Send help, the ship is sinking! SOS!")
                        }
        //
        });

                    }, function (context, data) {
                        console.log("No user with that id? Oh no!")
                    });
                }, function (context, data) {
                    console.log("no list to return, death to the users!")
                });
            }

            google.maps.event.addDomListener(window, 'load', getUser);

            //Unsubscribe
            //swampdragon.unsubscribe('locationcurrent', 'local-channel', null, function (context, data) {
            //    console.log("We succesfully unsubsrcibed")
            //}, function (context, data) {
            //    console.log("Unsubscribed failed")
            //});


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
            //                //locations.push([datanew[key]['user.username'], datanew[key].location]);
            //                console.log(datanew[key])
            //            }
            //        }
            //    }, function (context, data) {
            //        console.log("help no more data, it failed!")
            //    });
            //};
            //getdata();
            //var deletedata = {id: 4};
            //swampdragon.delete('locationcurrent', deletedata, function (context, data) {
            //    console.log(data + "Is outta here!")
            //}, function (context, data) {
            //    console.log("No deleting today")
            //} );
        });
});


