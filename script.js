let userForm = document.getElementById("userForm");
let score = 0;

userForm.addEventListener("submit",function (event){event.preventDefault}

var correctAnswers = {
    datatype:"letters",
    modulus:"percentage",
    equals:"Strictly equality",
    rules:"Must have quotation marks",
    functions:"Anonymous function",
}

var userData = new FormData(userForm);
compareData(userData);

function compareData(userData){
    var datatype = userData.get("letters");
    var modulus = userData.get("percentage");

var equals = userData.get("Strictly equality");
var rules = userData.get("Must have quotation marks");
var functions = userData.get("Anonymous function");}

if (datatype === correctAnswers["letters"]) {
    score +=4;
} else { alert("not correct");}

let userScore = document.querySelector(".score");
userScore.textContent = score;
userScore.getElementsByClassName.color = "red";
userForm .style.display = "none";
