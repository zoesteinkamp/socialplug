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
        swampdragon.onChannelMessage(function (channels, message) {

            console.log(message.data.id);

            if (message.action === "created"){

            }
            else if( message.action === "deleted"){

            }
            else if( message.action === "updated"){

            }
            else{

            }

            });

            getUser();
            function getUser() {
                swampdragon.getSingle('locationcurrent', {id: swamp}, function (context, data) {
                    swampdragon.getList('locationcurrent', {}, function (context, data2) {
                        console.log(data2);
                        console.log(data);
                        otheruser = [];
                        contentString = "";
                        data2.forEach(function (item) {
                            if (item.user === user) {
                                console.log("found user")
                            }
                            else {
                                prettyarray = [];
                                prettyarray.push("<h1>" + item.user + "</h1>", item.latitude, item.longititude);
                                //contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
                                //'<h1 id="firstHeading" class="firstHeading">' + item.user + '</h1>' + '</div>';
                                //
                                otheruser.push(prettyarray)
                            }
                        });
                        console.log(contentString);
                        console.log(otheruser);

                        var myLatlng = new google.maps.LatLng(data.latitude, data.longititude);
                        var mapOptions = {
                            zoom: 15,
                            center: myLatlng
                        };
                        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


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

                                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                    return function() {
                                      infowindow.setContent(locations[i][0]);
                                      infowindow.open(map, marker);
                                    }
                                })(marker, i));
                            }
                        }

                        //var marker = new google.maps.Marker({
                        //    position: myLatlng,
                        //    map: map,
                        //    title: 'Hello World!'
                        //});
                    }, function (context, data) {
                        console.log("No user with that id? Oh no!")
                    });
                }, function (context, data) {
                    console.log("no list to return, death to the users!")
                });
            };

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
//        });
//});


