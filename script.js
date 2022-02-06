function submitted(){
    var score = 0;

    var correctAnswers = {
        datatype:"letters",
        modulus:"percentage",
        equals:"Strictly equality",
        rules:"Must have quotation marks",
        functions:"Anonymous function",}


var empty= document.getElementById("empty");
if (correctAnswers==="letters"){score ++};
if (correctAnswers==="percentage"){score ++};
if (correctAnswers==="Strictly equality"){score ++};
if (correctAnswers==="Must have quotation marks"){score ++};
if (correctAnswers==="Anonymous function"){score ++};

userform.style.display ="none"

if (score >= 4) {
    empty.
}

// var userData = new FormData(userForm);
// compareData(userData);

// if (datatype === correctAnswers["letters"]) {
//     score +=4;
// } else { alert("not correct");}



// }



// function compareData(userData){
//     var datatype = userData.get("letters");
//     var modulus = userData.get("percentage");

// var equals = userData.get("Strictly equality");
// var rules = userData.get("Must have quotation marks");
// var functions = userData.get("Anonymous function");}



// let userScore = document.querySelector(".score");
// userScore.textContent = score;
// userScore.getElementsByClassName.color = "red";
// userForm .style.display = "none";}
