const btn = document.getElementById("empty")

btn.addEventListener("click", (e)=> {
  e.preventDefault()
  score()
})

var form = document.getElementById("userForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


function submitted(){

    var score = 0;

    var answer = document.querySelector('input[name="modulus"]:checked').value;
    console.log(answer);

    var correctAnswers = {
        datatype:"letters",
        modulus:"percentage",
        equals:"Strictly equality",
        rules:"Must have quotation marks",
        functions:"Anonymous function",}



// if (correctAnswers===answer){score ++};
if (answer==="percentage"){
    score++
    empty= document.getElementById("empty").innerHTML= score;
}
// if (correctAnswers==="Strictly equality"){score ++};
// if (correctAnswers==="Must have quotation marks"){score ++};
// if (correctAnswers==="Anonymous function"){score ++};

// userform.style.display ="none"

if (score >= 4) {
    empty.textContent= "Excellent" + Math.trunc (score/5*100) + "%"

}else if(score >= 2){
    empty.textContent= "fair" + Math.trunc (score/5*100 )+ "%"

}else{
    empty.textContent= "you can do better" + Math.trunc (score/5*100) +"%"
}
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
