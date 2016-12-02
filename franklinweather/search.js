$('#query').keyup(function(){
  // All code will be inside of this block
     var value = $('#query').val();
    var rExp = new RegExp(value, "i");
      $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
          console.log(data);
          $('#query').keyup(function() {
            var value = $('#query').val();
            var rExp = new RegExp(value, "i");
            $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
                console.log(data); // test for JSON received
                // Begin building output
                var output = '<ol id="ol">';
                $.each(data.RESULTS, function(key, val) {
                    if (val.name.search(rExp) != -1) {
                    output += '<li>';
                    output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                    output += '</li>';
                    }
                }); // end each
            output += '</ol>';
            $("#searchResults").html(output); // send results to the page
            }); // end getJSON
          }); // end onkeyup
      }); // end getJSON
}); // end keyup
        

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  
};       



// Get weather data from wunderground.com
function getData(zmw) {
  // Get the data from the wunderground API
  $.ajax({
    url: "https://api.wunderground.com/api/47d4acfe313b2d41/geolookup/conditions/q/"
    + zmw + ".json"
    , dataType: "jsonp"
    , success: function (data) {
      console.log(data);
      var location = data.location.city + ', ' + data.location.state;
      var temp_f = data.current_observation.temp_f;
        var time = data.current_observation.locasl_time_rfc822;
      console.log('Location is: ' + location);
      console.log('Temp is: ' + temp_f);
      $("#cityDisplay").text(location);
      $("title").html(location + " | Weather Center");
      $("#currentTemp").html(Math.round(temp_f) + '°');
      $("#summary").text(toTitleCase(data.current_observation.icon));
      $("#cover").fadeOut(250);
        $("#add1").html(time);
    }
  });
}




// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
  evt.preventDefault();
  // With the text value get the needed value from the weather.json file
  var jsonCity = $(this).text(); // Franklin, etc...
  console.log(jsonCity);
  $.ajax({
    url: "https://api.wunderground.com/api/47d4acfe313b2d41/geolookup/conditions/q/"
    + jsonCity + ".json" 
    , dataType: "json"
    , success: function (data) {
      console.log(data);
      console.log(data['location']['zip']);
      var zip = data['location']['zip'];
      console.log(zip);
      getData(zip);
    }
  });
});

$("searchResults").on('click', "a", function myFunction(evt){
    document.getElementById('ol').style.display="none";
})




