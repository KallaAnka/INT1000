var posisjon = 0, quiz, quiz_status, spørsmål, valg, valgene, valgA, valgB, valgC, riktig = 0;
function _(x){
	return document.getElementById(x); // Funksjon for å slippe å skrive .getElementById flere ganger i koden
}
function produserSpørsmål() {
	quiz = _("quiz");
/* Sjekker hvorvidt alle spørsmålene er besvart. Hvis localStorage støttes av nettleser,
sjekkes det hvilken Quiz som kjører. Kjører deretter relevant highscore-funksjon. Gir til slutt beskjed om at Quiz er avsluttet */
	if(posisjon >= spørsmålene.length){
		if(typeof(Storage) !== "undefined") {

		if (window.location.href.indexOf("markQuiz.php") > -1) {
			highscoreMark();
		} else if (window.location.href.indexOf("benkQuiz.php") > -1) {
			highscoreBenk();
		} else {
			highscoreKne();
		}
		} else {
			quiz.innerHTML = "<h2>Din nettleser støtter ikke Web Storage. Du får derfor ikke informasjon om highscore</h2"
			quiz.innerHTML += "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
		}
		_("quiz_status").innerHTML = "Quiz ferdig";
		posisjon = 0;
		riktig = 0;
		return false;
	}
	/* Legger relevant spørsmål og relevante svar fra spørsmål-array
	til html. Kjører sjekkSvar-funksjon når svar-knapp blir trykt på */
	_("quiz_status").innerHTML = "Spørsmål "+(posisjon+1)+" av "+spørsmålene.length;
	spørsmål = spørsmålene[posisjon]["spør"];
	valgA = spørsmålene[posisjon]["svar1"];
	valgB = spørsmålene[posisjon]["svar2"];
	valgC = spørsmålene[posisjon]["svar3"];
	quiz.innerHTML = "<h3>"+spørsmål+"</h3>";
	quiz.innerHTML += "<div class='radio'><label><input type='radio' name='valgene' value='A' checked> "+valgA+"<br></label></div>";
	quiz.innerHTML += "<div class='radio'><label><input type='radio' name='valgene' value='B'> "+valgB+"<br></label></div>";
	quiz.innerHTML += "<div class='radio'><label><input type='radio' name='valgene' value='C'> "+valgC+"<br><br></label></div>";
	quiz.innerHTML += "<button class = 'btn btn-primary' onclick='sjekkSvar()'>Svar</button>";
};
/* Sjekker hvilke svar som er riktige ved å gå igjennom valgene
for deretter å sjekke om de stemmer overens med riktig svar i spørsmål-array */
function sjekkSvar(){
	valgene = document.getElementsByName("valgene");
	for(var i=0; i<valgene.length; i++){
		if(valgene[i].checked){
			valg = valgene[i].value;
		}
	}
	if(valg == spørsmålene[posisjon]["korrekt"]){
		riktig++;
		$(".well").css("background-color", "green"); // setter well-klassen til grønn for riktig svar
	} else {
		$(".well").css("background-color", "red"); // setter well-klassen til rød for feil svar
  }
setTimeout(function() { // timeOut-funksjon for å vise riktig eller feil svar i en viss periode før well-klassen blir satt tilbake til default-farge. Deretter neste spørsmål.
	$(".well").css("background-color", "#f5f5f5");
	posisjon++;
	produserSpørsmål();
}, 1000);

}
