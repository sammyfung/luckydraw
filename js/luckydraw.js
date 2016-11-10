function drawNext() {
  var lastdraw = $("#luckyperson").html();
  var alllucky = $("#drawhistory").html();
  $("#drawhistory").html(lastdraw + '<br />' + alllucky);
  var personname = data[Math.floor(Math.random() * data.length)];
  $("#luckyperson").html(personname);
}
