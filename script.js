$(document).ready(function() {
  var countClic = 0;

  $("#b1").click(function() {
    countClic++;
    $("#number").text("nombre de clics: " + countClic);
  });

  $("#b2").click(function() {
    countClic--;
    $("#number").text("nombre de clics: " + countClic);
  });
});
