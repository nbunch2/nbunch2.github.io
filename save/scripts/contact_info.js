$(document).ready(function(){
    $.getJSON( "/save/scripts/contact_info.json", function( data ) {
  console.log(data);
    $(".info").text(data.contact.story);
        $(".videointro").text(data.contact.video);
        $(".email").text(data.information.email);
    
    });
    
});





	