$(document).ready(function(){
    $.getJSON( "/save/scripts/ourstory.json", function( data ) {
  console.log(data);
    $(".thisdream").text(data.dream.this);
    $(".everytime").text(data.dream.every);
    $(".buy").text(data.save.buy);
    $(".wecan").text(data.save.we);
    
    });
    
});