$( "#help" ).click(function() {
    $.get( "/api/event/?category=foo", function( data ) {
        $.each(data[3], function( key, value ){
            console.log(key + ": " + value);
        });
    });
});

$( "#help2" ).click(function() {
    $.get( "/api/user/", function( data ) {
        $.each(data[3], function( key, value ){
            console.log(key + ": " + value);
        });
    });
});



