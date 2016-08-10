
$("form#teaspoonTablespoon").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#teaspoon").val());
  var result = number1 / 3;
  $("#output").text(result);
});

$("form#tablespoonCup").submit(function(event) {
  event.preventDefault();
  var number2 = parseInt($("#tablespoon").val());
  var result = number2 / 16;
  $("#output").text(result);
});

$("form#cupPint").submit(function(event) {
  event.preventDefault();
  var number3 = parseInt($("#cup").val());
  var result = number3 / 2;
  $("#output").text(result);
});
