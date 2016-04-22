/* Laster inn relevant json-fil, skriver den til
spørmål-array, kjører produserSpørsmål()-funksjonen */
var spørsmålene = [];
$(document).ready(function() {
$.getJSON('../Oblig/json/kne.json', function (data) {
spørsmålene = data.s;
produserSpørsmål();
});
});
function highscoreKne() {
  var kneHigh = localStorage.getItem('kneHigh');

  if (localStorage.getItem('kneHigh') === null) { // Sjekker hvorvidt highscore-variablen i localStorage er null, og setter highscore hvis den er null.
    var kneHigh = localStorage.setItem('kneHigh', riktig);
    quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
    quiz.innerHTML += "<h2>Din highscore er "+riktig+" av "+spørsmålene.length+" riktige</h2";

  } else if (riktig > kneHigh) { // Sjekker hvorvidt nåværende score er ny highscore.
    benkHigh = localStorage.setItem('kneHigh', riktig);
    quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
    quiz.innerHTML += "<h2>Din nye highscore er "+riktig+" av "+spørsmålene.length+" riktige</h2";

  } else { // Hvis nåværende score er lavere, skriv ut highscore
    quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
    quiz.innerHTML += "<h2>Din highscore er fremdeles "+kneHigh+" av "+spørsmålene.length+" riktige</h2";
    }
}
