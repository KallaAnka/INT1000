  var spørsmålene = [];
  $(document).ready(function() {
  $.getJSON('../Oblig/json/mark.json', function (data) {
  spørsmålene = data.s;
  produserSpørsmål();
  });
});
