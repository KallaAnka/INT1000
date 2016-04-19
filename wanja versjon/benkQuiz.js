var spørsmålene = [];
$(document).ready(function() {
$.getJSON('../Oblig/json/benk.json', function (data) {
spørsmålene = data.s;
produserSpørsmål();
});
});
