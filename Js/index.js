$(document).ready(function() {
  // Design toggle
  $("#design").click(function() {
    $("#design-text").show(500);
    $(this).hide();
  });
  $("#design-text").click(function() {
    $("#design").show(500);
    $(this).hide();
  });
