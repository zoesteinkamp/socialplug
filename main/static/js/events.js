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
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });

    }else if(title === "" && distance === "" && category==="" && date===""){  //Everyone blank
         $("#startscreen").replaceAll('<div id="startscreen" class="col-sm-12">'+ '<p>' + 'You have not input anything!'  +'</p>'  +'</div>')


    }else if(title != "" && distance != "" && category !="" && date === ""){ // everyone but date
        var paramed =  {'title': title ,'category': category, 'distance': distance };
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });



    }else if(title === "" && distance != "" && category!="" && date!=""){  //Everyone but title
        var paramed = {'category': category, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance != "" && category==="" && date!=""){  //Everyone but category
        var paramed = {'title': title, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });



    }else if(title != "" && distance != "" && category!="" && date!=""){  //Everyone but distance
        var paramed = {'title': title, 'category': category, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });



    }else if(title != "" && distance != "" && category==="" && date===""){ // only title and distance
        var paramed =  {'title': title , 'distance': distance };
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });

    }else if(title === "" && distance != "" && category!= "" && date===""){ // only category and distance
        var paramed = {'category': category, 'distance': distance};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title === "" && distance != "" && category==="" && date!=""){ // only date and distance
        var paramed = {'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title === "" && distance === "" && category!="" && date!=""){ // only date and category
        var paramed = { 'category': category, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance === "" && category!="" && date===""){ // only title and category
        var paramed = {'title': title, 'category': category};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance === "" && category==="" && date!=""){ // only title and date
        var paramed = {'title': title, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance != "" && category==="" && date===""){ // only title and distance
        var paramed = {'title': title, 'distance': distance};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance != "" && category!="" && date===""){ // only title and distance  and category
        var paramed = {'title': title, 'category': category, 'distance': distance};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance != "" && category==="" && date!=""){ // only title and distance and date
        var paramed = {'title': title,'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance === "" && category!="" && date!=""){ // only title and category and date
        var paramed = {'title': title, 'category': category, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title === "" && distance != "" && category!="" && date!=""){ // only distance and date and category
        var paramed = {'category': category, 'distance': distance, 'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title != "" && distance === "" && category==="" && date===""){ //only title
        var paramed = {'title': title};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title === "" && distance != "" && category==="" && date===""){ // only distance
        var paramed = {'distance': distance};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


    }else if(title === "" && distance === "" && category !="" && date===""){ // only category
        var paramed = { 'category': category};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                     $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')



              });
          });


                  //console.log(items)


    }else if(title === "" && distance === "" && category==="" && date!=""){ //only date
        var paramed = {'date': date};
        var param = jQuery.param( paramed );
        console.log(param);
        $('#startscreen').remove();
          $.getJSON( "/api/event/?"+ param + "&format=json", function( data ) {
              $.each(data, function (i) {
                  console.log(data[i].image);
                      $("#post").prepend('<div class="col-sm-12" id="post">'+ '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
  '<div class="panel panel-default">'+ '<div class="panel-heading">' + '<h4 class="panel-title">' + '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ data[i].id + ' "> ' + data[i].title + '</a>'+
         '<img class="inline-block float-right" src="' + data[i].image +'" alt="" style="height: 80px; width: 80px;"/>'+
      '</h4>'+ '</div>'+ '<div id="collapse'+ data[i].id + '" class="accordion-body collapse">'+
      '<div class="panel-body">'+ '<p>' + data[i].description + '<p>' +  '<a href="{% url ' + ' + postit + ' + ' '  + event.id + '%}">' + '<button>'
                      + 'Post' +  '</button>'+ '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>')





              });
          });


    }else{
        console.log("Error no search results")
    }



    var paramed =  {'title': title ,'category': category, 'distance': distance ,'date': date };
  console.log(paramed);

});


