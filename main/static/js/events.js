//$( "#help" ).click(function() {
//    $.get( "/api/event/?category=go", function( data ) {
//        $.each(data[3], function( key, value ){
//            console.log(key + ": " + value);
//        });
//    });
//});
//
//$( "#help2" ).click(function() {
//    $.get( "/api/user/", function( data ) {
//        $.each(data[3], function( key, value ){
//            console.log(key + ": " + value);
//        });
//    });
//});

$( "#target" ).click(function() {
  var distance = $('#distancesearch').val();
  var category = $('#categorysearch').val();
  var title = $('#textsearch').val();
  var date = $('#datesearch').val();
  console.log(distance + category + title + date);

    if (title != "" && distance !="" && category !="" && date !="" ) {// everyone
        var paramed = {'title': title, 'category': category, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });

    }else if(title === "" && distance === "" && category==="" && date===""){  //Everyone blank
            $.getJSON( "/api/event/?&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance != "" && category !="" && date === ""){ // everyone but date
        var paramed =  {'title': title ,'category': category, 'distance': distance };
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });



    }else if(title === "" && distance != "" && category!="" && date!=""){  //Everyone but title
        var paramed = {'category': category, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance != "" && category==="" && date!=""){  //Everyone but category
        var paramed = {'title': title, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });



    }else if(title != "" && distance != "" && category!="" && date!=""){  //Everyone but distance
        var paramed = {'title': title, 'category': category, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });



    }else if(title != "" && distance != "" && category==="" && date===""){ // only title and distance
        var paramed =  {'title': title , 'distance': distance };
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });

    }else if(title === "" && distance != "" && category!= "" && date===""){ // only category and distance
        var paramed = {'category': category, 'distance': distance};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title === "" && distance != "" && category==="" && date!=""){ // only date and distance
        var paramed = {'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title === "" && distance === "" && category!="" && date!=""){ // only date and category
        var paramed = { 'category': category, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance === "" && category!="" && date===""){ // only title and category
        var paramed = {'title': title, 'category': category};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance === "" && category==="" && date!=""){ // only title and date
        var paramed = {'title': title, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance != "" && category==="" && date===""){ // only title and distance
        var paramed = {'title': title, 'distance': distance};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance != "" && category!="" && date===""){ // only title and distance  and category
        var paramed = {'title': title, 'category': category, 'distance': distance};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance != "" && category==="" && date!=""){ // only title and distance and date
        var paramed = {'title': title,'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance === "" && category!="" && date!=""){ // only title and category and date
        var paramed = {'title': title, 'category': category, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title === "" && distance != "" && category!="" && date!=""){ // only distance and date and category
        var paramed = {'category': category, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title != "" && distance === "" && category==="" && date===""){ //only title
        var paramed = {'title': title};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else if(title === "" && distance != "" && category==="" && date===""){ // only distance
        var paramed = {'distance': distance};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data, function () {
                  items.push([data]);

              });
          }
              console.log(items)
          });


    }else if(title === "" && distance === "" && category !="" && date===""){ // only category
        var paramed = { 'category': category};
        var param = jQuery.param( paramed );
        var useful;
        var go;
        console.log(param);
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  useful = data[i];
                  go = data[i].user;
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="panel-collapse collapse in">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


                  //console.log(items)


    }else if(title === "" && distance === "" && category==="" && date!=""){ //only date
        var paramed = {'date': date};
        var param = jQuery.param( paramed );
        $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });


    }else{
        console.log("Error no search results")
    }



    var paramed =  {'title': title ,'category': category, 'distance': distance ,'date': date };
  console.log(paramed);

});


