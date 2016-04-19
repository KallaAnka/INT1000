var spørsmålene = [];
$(document).ready(function() {
$.getJSON('../Oblig/json/kne.json', function (data) {
spørsmålene = data.s;
produserSpørsmål();
});
});
