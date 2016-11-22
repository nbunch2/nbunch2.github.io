// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();
    
  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
  url : "http://api.wunderground.com/api/47d4acfe313b2d41/geolookup/conditions/q/" + lat + ',' + long + ".json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
      var state = parsed_json['location']['state'];
   var sum = parsed_json['current_observation']['weather']; 
    var addone = parsed_json['current_observation']['local_time_rfc822']; 
      var addtwo = parsed_json['current_observation']['icon']; 
      var addthree = parsed_json['current_observation']['precip_today_in']; 
    //alert("Current temperature in " + location + "," + state + " is: " + temp_f);
  
    $('#city').html(location);
    $('#state').html(state);
    $('#cityDisplay').html(location + ", " + state);
    $('title').html(location + "," + state);
    $('#currentTemp').html(Math.round(temp_f) + "&#176" + "F");
      $('#summary').html(sum);
      $('#add1').html("Local Time: " + addone);
      $('#add2').html("Current Weather: " + addtwo);
      $('#add3').html("Precipitation Today in Inches: " + addthree);
    
      
      
  }
}); 


      $("#cover").fadeOut(250);
    }
           });

  

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  
};