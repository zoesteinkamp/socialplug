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
    if (title != "" && distance !="" && category !="" && date !="" ) {
        var paramed = {'title': title, 'category': category, 'distance': distance, 'date': date}; // everyone

    }else if(title === "" && distance === "" && category==="" && date===""){  //Everyone blank



    }else if(title != "" && distance != "" && category !="" && date === ""){ // everyone but date
        var paramed =  {'title': title ,'category': category, 'distance': distance };



    }else if(title === "" && distance != "" && category!="" && date!=""){  //Everyone but title
        var paramed = {'category': category, 'distance': distance, 'date': date};


    }else if(title != "" && distance != "" && category==="" && date!=""){  //Everyone but category
        var paramed = {'title': title, 'distance': distance, 'date': date};



    }else if(title != "" && distance != "" && category!="" && date!=""){  //Everyone but distance
        var paramed = {'title': title, 'category': category, 'date': date};



    }else if(title != "" && distance != "" && category==="" && date===""){ // only title and distance
        var paramed =  {'title': title , 'distance': distance };

    }else if(title === "" && distance != "" && category!="" && date===""){ // only category and distance
        var paramed = {'category': category, 'distance': distance};


    }else if(title === "" && distance != "" && category==="" && date!=""){ // only date and distance
        var paramed = {'distance': distance, 'date': date};


    }else if(title === "" && distance === "" && category!="" && date!=""){ // only date and category
        var paramed = { 'category': category, 'date': date};


    }else if(title != "" && distance === "" && category!="" && date===""){ // only title and category
        var paramed = {'title': title, 'category': category};


    }else if(title != "" && distance === "" && category==="" && date!=""){ // only title and date
        var paramed = {'title': title, 'date': date};


    }else if(title != "" && distance != "" && category==="" && date===""){ // only title and distance
        var paramed = {'title': title, 'distance': distance};


    }else if(title != "" && distance != "" && category!="" && date===""){ // only title and distance  and category
        var paramed = {'title': title, 'category': category, 'distance': distance};


    }else if(title != "" && distance != "" && category==="" && date!=""){ // only title and distance and date
        var paramed = {'title': title,'distance': distance, 'date': date};


    }else if(title != "" && distance === "" && category!="" && date!=""){ // only title and category and date
        var paramed = {'title': title, 'category': category, 'date': date};


    }else if(title === "" && distance != "" && category!="" && date!=""){ // only distance and date and category
        var paramed = {'category': category, 'distance': distance, 'date': date};


    }else if(title != "" && distance === "" && category==="" && date===""){ //only title
        var paramed = {'title': title};


    }else if(title === "" && distance != "" && category==="" && date===""){ // only distance
        var paramed = {'distance': distance};


    }else if(title === "" && distance === "" && category !="" && date===""){ // only category
        var paramed = { 'category': category};
        var param = jQuery.param( paramed );
          console.log(param)


          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
          var items = [];
          for (key in data) {
              $.each(data[key], function (id, val) {
                  items.push(id + val);

              });
          }
              console.log(items)
          });



    }else if(title === "" && distance === "" && category==="" && date!=""){ //only date
        var paramed = {'date': date};


    }else{
        console.log("Error no search results")
    }



    var paramed =  {'title': title ,'category': category, 'distance': distance ,'date': date };
  console.log(paramed);

});


