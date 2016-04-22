/* Laster inn relevant json-fil, skriver den til
spørmål-array, kjører produserSpørsmål()-funksjonen */
var spørsmålene = [];
$(document).ready(function() {
$.getJSON('../Oblig/json/benk.json', function (data) {
spørsmålene = data.s;
produserSpørsmål();
});
});
function highscoreBenk() {
  var benkHigh = localStorage.getItem('benkHigh');

  if (localStorage.getItem('benkHigh') === null) { // Sjekker hvorvidt highscore-variablen i localStorage er null, og setter highscore hvis den er null.
    var benkHigh = localStorage.setItem('benkHigh', riktig);
    quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
    quiz.innerHTML += "<h2>Din highscore er "+riktig+" av "+spørsmålene.length+" riktige</h2";

  } else if (riktig > benkHigh) { // Sjekker hvorvidt nåværende score er ny highscore.
    benkHigh = localStorage.setItem('benkHigh', riktig);
    quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
    quiz.innerHTML += "<h2>Din nye highscore er "+riktig+" av "+spørsmålene.length+" riktige</h2";

    } else { // Hvis nåværende score er lavere, skriv ut highscore
    quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
    quiz.innerHTML += "<h2>Din highscore er fremdeles "+benkHigh+" av "+spørsmålene.length+" riktige</h2";
    }
}
