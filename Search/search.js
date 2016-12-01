$('#query').keyup(function(){
  // All code will be inside of this block
     var value = $('#query').val();
    var rExp = new RegExp(value, "i");
      $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
  
  }); // end getJSON
}); // end keyup