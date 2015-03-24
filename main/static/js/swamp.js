swampdragon.ready(function () {
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

                //  person.forEach(function (item) {
                //      if (item.user === user && item.username === username) {
                //          if ((item.latitude !== latitudenew) || (item.longitude !== longitudenew)) {
                //              var id = item.id;
                //              swampdragon.update('locationcurrent', {user: user, latitude: latitudenew, longititude: longitudenew, username: username, id: id}, function (context, data) {
                //                  console.log("data updated", data);
                //                  return true;
                //              }, function (context, data) {
                //                  console.log("You may not be updated");
                //              });
                //          } else {
                //              console.log("No location change");
                //              return true;
                //          }
                //      }else{
                //          return false;
                //      }
                //  });
                //
                //
                //var pie = function() {
                //    if (result === true) {
                //        console.log("We have you")
                //    } else if (result === false) {
                //        swampdragon.create('locationcurrent', {
                //            user: user,
                //            latitude: latitudenew,
                //            longititude: longitudenew,
                //            username: username
                //        }, function (context, data) {
                //            console.log("data created", data);
                //        }, function (context, data) {
                //            console.log("You may not be created")
                //        });
                //    } else {
                //        console.log("Error on the promice, FML")
                //    }
                //};

            //
            //var getswamp = function(item, index) {
            //    return new Promise(function(resolve, reject){
            //            var result = false;
            //            if (item.user === user && item.username === username) {
            //                if ((item.latitude !== latitudenew) || (item.longitude !== longitudenew)) {
            //                    var id = item.id;
            //                    swampdragon.update('locationcurrent', {
            //                        user: user,
            //                        latitude: latitudenew,
            //                        longititude: longitudenew,
            //                        username: username,
            //                        id: id
            //                    }, function (context, data) {
            //                        console.log("data updated", data);
            //                        result = true;
            //                        resolve(result);
            //                    }, function (context, data) {
            //                        console.log("You may not be updated");
            //                    });
            //                } else {
            //                    console.log("No location change");
            //                    result = true;
            //                }
            //                }else{
            //                    if ( item.index  === person.index){
            //                        console.log(person);
            //                        resolve(result)
            //                    }
            //                }
            //        });
            //     };
            //
            //    person.forEach(function (item, index) {
            //        var swamping = getswamp(item, index);
            //        swamping.then(function (result) {
            //        console.log(result);
            //        if (result === true) {
            //            console.log("We have you");
            //
            //        } else if (result === false && (index === person.length - 1)) {
            //            console.log('Index: ' + index + ' Length of list is ' + person.length);
            //            swampdragon.create('locationcurrent', {
            //                user: user,
            //                latitude: latitudenew,
            //                longititude: longitudenew,
            //                username: username
            //            }, function (context, data) {
            //                console.log("data created", data);
            //            }, function (context, data) {
            //                console.log("You may not be created")
            //            });
            //        }
            //    })
            //});


                //if (result === true) {
                //    console.log('trueee');
                //}
                //else {
                //    console.log('The result has not changed to true');
                //}
                //console.log('The actual result is ', result);

            });
        };

        //getUser();
        //function getUser() {
        //    swampdragon.getSingle('locationcurrent', {id: swamp}, function (context, data) {
        //        swampdragon.getList('locationcurrent', {}, function (context, data2) {
        //
        //            var myLatlng = new google.maps.LatLng(data.latitude, data.longititude);
        //            var mapOptions = {
        //                zoom: 15,
        //                center: myLatlng
        //            };
        //            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        //
        //
        //            console.log(data2);
        //            console.log(data);
        //            otheruser = [];
        //            contentString = "";
        //
        //
        //            data2.forEach(function (item) {
        //                var myloc = null;
        //                if (item.user === user) {
        //                    myloc = new google.maps.LatLng(item.latitude, item.longititude)
        //                }
        //                else {
        //                    var compare = new google.maps.LatLng(item.latitude, item.longititude);
        //                    var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, compare);
        //                    if (distance > 8046.72) {
        //                        console.log("Your too damn far away!")
        //                    }
        //                    else {
        //                        prettyarray = [];
        //                        prettyarray.push("<h1>" + item.username + "</h1>", item.latitude, item.longititude, item.id);
        //                        otheruser.push(prettyarray);
        //                    }
        //                }
        //            });
        //
        //
        //            var infowindow = new google.maps.InfoWindow({
        //                maxWidth: 160
        //            });
        //            console.log(otheruser)
        //            var markers = new Array();
        //            setMarkers(map, otheruser);
        //            function setMarkers(map, locations) {
        //                for (var i = 0; i < locations.length; i++) {
        //                    var marker = new google.maps.Marker({
        //                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        //                        map: map
        //                    });
        //
        //                    markers.push(marker);
        //
        //                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        //                        return function () {
        //                            infowindow.setContent(locations[i][0]);
        //                            infowindow.open(map, marker);
        //                        }
        //                    })(marker, i));
        //                }
        //            }

                    //swampdragon.onChannelMessage(function (channels, message) {
                    //    var dragonid = message.data.id;
                    //    var lat = message.data.latitude;
                    //    var username = message.data.username;
                    //    var long = message.data.longititude;
                    //    var dragonuser = message.data.user;
                    //    if (message.action === "created") {
                    //        var compare = new google.maps.LatLng(lat, long);
                    //        var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, compare);
                    //        if (distance > 8046.72) {
                    //            console.log("Your new marker is too damn far away!")
                    //        }
                    //        else {
                    //            var uglyarray = [];
                    //            uglyarray.push("<h1>" + username + "</h1>", lat, long, dragonid);
                    //            otheruser.push(uglyarray);
                    //            console.log(uglyarray);
                    //            setMarkers(map, otheruser);
                    //        }
                    //    }
                    //    else if (message.action === "deleted") {
                    //        for (var i = 0; i < otheruser.length; i++) {
                    //            if (otheruser[i][3] === dragonid) {
                    //                console.log()
                    //            }
                    //            }
                    //        };
                    //
                    //
                    //        }
                            //otheruser.findIndex(function(x) { x == 2; });




                            //var deletearray = [];
                            //var originarray = [];
                            //originarray.push(["<h1>" + username + "</h1>", lat, long, dragonid]);
                            //console.log(originarray);
                            //
                            //for (var i = 0; i < otheruser.length; i++) {
                            //    for (var j = 0; j < originarray.length; j++) {
                            //        if (otheruser[i] === originarray[j]) {
                            //            var help = otheruser.remove(otheruser[i]);
                            //            Array.prototype.remove = function (value) {
                            //                this.splice(this.indexOf(value), 1);
                            //                return true;
                            //            };
                            //            console.log(help)
                            //            console.log(otheruser)
                            //
                            //        }

                                //}

                                //setMarkers(map, otheruser);
                            //}
                        //}
                        //    else if (message.action === "updated") {
                        //
                        //
                        //    }
                        //    else {
                        //        console.log("Send help, the ship is sinking! SOS!")
                        //    }

                    //});

        //        }, function (context, data) {
        //            console.log("No user with that id? Oh no!")
        //        });
        //    }, function (context, data) {
        //        console.log("no list to return, death to the users!")
        //    });
        //}


                //getdata();
                //var deletedata = {id: 4};
                //swampdragon.delete('locationcurrent', deletedata, function (context, data) {
                //    console.log(data + "Is outta here!")
                //}, function (context, data) {
                //    console.log("No deleting today")
                //} );

        $( "#logout" ).click(function() {
            swampdragon.ready(function () {
                swampdragon.open(function () {
                // Subscribing to all channels provided by locationcurrent-router
                swampdragon.subscribe('locationcurrent', 'swampy-channel', null, function (context, data) {
                this.dataMapper = new DataMapper(data);
                console.log("we are subscribed")
            }, function (context, data) {
                console.log("Failure to subscribe")
            });
                var data = {id: 123};
                swampdragon.delete(route, data, function (context, data) {
            }, function (context, data) {
                console.log("Could not find user to delete")
            } );
        });
    });
});



            });
});



