$(document).ready(function(){
  if (!document.getElementById('mainhead')) {
    console.log("masthead-row found!");
    $('#sidebar').affix({
      offset: {
        top: 0
      }
    });
  } else {
    console.log("masthead-row not found!");
    $('#sidebar').affix({
      offset: {
        top: 185
      }
    });
  };
});

$("#tutorialGroup").click(function(){
  $(this).find($(".fa")).toggleClass('fa-rotate-180');
});

$("#resourceGroup").click(function(){
  $(this).find($(".fa")).toggleClass('fa-rotate-180');
});

$("#softwareGroup").click(function(){
  $(this).find($(".fa")).toggleClass('fa-rotate-180');
});