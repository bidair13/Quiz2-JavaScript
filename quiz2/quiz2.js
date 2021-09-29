$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

document.getElementById("hover").addEventListener("mouseover", function() {
    document.getElementById("hover").style.backgroundColor = "blue";
});
    
document.getElementById("hover").addEventListener("mouseleave", function() {
    document.getElementById("hover").style.backgroundColor = "green";
});