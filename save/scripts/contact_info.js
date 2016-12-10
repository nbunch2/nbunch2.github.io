$(document).ready(sfunction(){
    $.getJSON( "/save/scripts/contact_info.json", function( data ) {
  console.log(data);
    $(".info").text(data.TroyHicks.City);
    
    });
    
});





	