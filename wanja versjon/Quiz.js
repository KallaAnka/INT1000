var posisjon = 0, quiz, quiz_status, spørsmål, valg, valgene, valgA, valgB, valgC, riktig = 0;
function _(x){
	return document.getElementById(x);
}
function produserSpørsmål(){
	quiz = _("quiz");

	if(posisjon >= spørsmålene.length){
		if(typeof(Storage) !== "undefined") {
			var høyesteResultat = localStorage.getItem('høyesteResultat');

			if (localStorage.getItem('høyesteResultat') === null) {
				var høyesteResultat = localStorage.setItem('høyesteResultat', riktig);
				console.log(høyesteResultat);
				quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
				quiz.innerHTML += "<h2>Din highscore er "+riktig+"</h2";

			} else if (riktig > høyesteResultat) {
				console.log(høyesteResultat);
				høyesteResultat = localStorage.setItem('høyesteResultat', riktig);
				quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
				quiz.innerHTML += "<h2>Din nye highscore er "+riktig+"</h2";
				console.log(høyesteResultat);

				} else {
				quiz.innerHTML = "<h2>Du fikk "+riktig+" av "+spørsmålene.length+" spørsmål riktig </h2>";
				quiz.innerHTML += "<h2>Din highscore er fremdeles "+høyesteResultat+"</h2";
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
	_("quiz_status").innerHTML = "Spørsmål "+(posisjon+1)+" av "+spørsmålene.length;
	spørsmål = spørsmålene[posisjon]["spør"];
	valgA = spørsmålene[posisjon]["svar1"];
	valgB = spørsmålene[posisjon]["svar2"];
	valgC = spørsmålene[posisjon]["svar3"];
	quiz.innerHTML = "<h3>"+spørsmål+"</h3>";
	quiz.innerHTML += "<div class='radio'><label><input type='radio' name='valgene' value='A' checked> "+valgA+"<br></label></div>";
	quiz.innerHTML += "<div class='radio'><label><input type='radio' name='valgene' value='B'> "+valgB+"<br></label></div>";
	quiz.innerHTML += "<div class='radio'><label><input type='radio' name='valgene' value='C'> "+valgC+"<br><br></label></div>";
	quiz.innerHTML += "<button class = 'btn btn-md btn-primary' onclick='sjekkSvar()'>Svar</button>";
};
function sjekkSvar(){
	valgene = document.getElementsByName("valgene");
	for(var i=0; i<valgene.length; i++){
		if(valgene[i].checked){
			valg = valgene[i].value;
		}
	}
	if(valg == spørsmålene[posisjon]["korrekt"]){
		riktig++;
		$(".well").css("background-color", "green");
	} else {
		$(".well").css("background-color", "red");
  }
setTimeout(function() {
	$(".well").css("background-color", "#f5f5f5");
	posisjon++;
	produserSpørsmål();
}, 1500);

}
