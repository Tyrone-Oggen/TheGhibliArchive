bodyHeight = () => {
  var heightToMinus = $(".footer").height();
  var totalHeight = $(window).height() - heightToMinus;
  $("#App").css("min-height", totalHeight);
};

document.ready(function() {
  bodyHeight();
});
