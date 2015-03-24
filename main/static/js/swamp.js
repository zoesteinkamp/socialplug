swampdragon.ready(function () {
    var  currentdragon;
    swampdragon.open(function() {
        // Subscribing to all channels provided by locationcurrent-router
        swampdragon.subscribe('locationcurrent', 'swampy-channel', null, function (context, data) {
            this.dataMapper = new DataMapper(data);
            console.log("we are subscribed")
        }, function (context, data) {
            console.log("Failure to subscribe")
        });

          var currentlocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var newlocation = (position.coords.latitude + "," +
                        position.coords.longitude);
                    console.log(newlocation);
                    swampy(position.coords);
                }, function() {

                });
            } else {
                // Browser doesn't support Geolocation
                handleNoGeolocation(false);
            }
            return null;
        };
        currentlocation();


        var swampy = function(locationc) {
            swampdragon.getList('locationcurrent', {id: 1}, function (context, person) {
                var latitudenew = locationc.latitude;
                var longitudenew = locationc.longitude;
                console.log("location", latitudenew, longitudenew);
                console.log(person);
                var prevUserFnd = false;
                var founditem = null;


                person.forEach(function (item) {
                      if (item.user === user ) {
                          founditem = item;
                        prevUserFnd = true;}
                    });

                if (prevUserFnd) {
                    currentdragon = founditem.id;
                    if ((founditem.latitude !== latitudenew) || (founditem.longitude !== longitudenew)) {
                              var id = founditem.id;
                              swampdragon.update('locationcurrent', {user: user, latitude: latitudenew, longititude: longitudenew, username: username, id: id}, function (context, data) {
                                  console.log("data updated", data);
                                  getUser();
                              }, function (context, data) {
                                  console.log("You may not be updated");
                                  getUser();
                              });
                          } else {
                              console.log("No location change");
                                getUser();
                          }
                    }else{
                     swampdragon.create('locationcurrent', {
                            user: user,
                            latitude: latitudenew,
                            longititude: longitudenew,
                            username: username
                        }, function (context, data) {
                            console.log("data created", data);
                            currentdragon = data.id;
                            getUser()
                        }, function (context, data) {
                            console.log("You may not be created")
                        });
                }
            });
        };

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


                    data2.forEach(function (item) {
                        var myloc = null;
                        if (item.user === user) {
                            myloc = new google.maps.LatLng(item.latitude, item.longititude)
                        }
                        else {
                            var compare = new google.maps.LatLng(item.latitude, item.longititude);
                            var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, compare);
                            if (distance > 8046.72) {
                                console.log("Your too damn far away!")
                            }
                            else {
                                prettyarray = [];
                                prettyarray.push("<h1>" + item.username + "</h1>", item.latitude, item.longititude, item.id);
                                otheruser.push(prettyarray);
                            }
                        }
                    });


                    var infowindow = new google.maps.InfoWindow({
                        maxWidth: 160
                    });
                    console.log(otheruser)
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
                            var compare = new google.maps.LatLng(lat, long);
                            var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, compare);
                            if (distance > 8046.72) {
                                console.log("Your new marker is too damn far away!")
                            }
                        else {
                            var uglyarray = [];
                            uglyarray.push("<h1>" + username + "</h1>", lat, long, dragonid);
                            otheruser.push(uglyarray);
                            console.log(uglyarray);
                            setMarkers(map, otheruser);
                        }
                    }
                        //else if (message.action === "deleted") {
                    //        for (var i = 0; i < otheruser.length; i++) {
                    //            if (otheruser[i][3] === dragonid) {
                    //                console.log()
                    //
                    //            }
                    //        }
                    //    }

                        setMarkers(map, otheruser);
                        //}
                        //}
                        //    else if (message.action === "updated") {
                        //
                        //
                        //    }
                        //    else {
                        //        console.log("Send help, the ship is sinking! SOS!")
                        //    }
                    });

                            }, function (context, data) {
                                console.log("No user with that id? Oh no!")
                            });
                        }, function (context, data) {
                            console.log("no list to return, death to the users!")
                        });
                    }


                    $("#logout").click(function () {
                        console.log("Dont show up")
                        swampdragon.delete('locationcurrent', {id: currentdragon}, function (context, data) {
                        }, function (context, data) {
                            console.log("Could not find user to delete")
                        });
                    });


                });
            });



