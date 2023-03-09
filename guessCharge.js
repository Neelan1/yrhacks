let correctButton = 0;
let correct = 0;
let totalQuestions = 0;
let alreadyClicked = false;
let buttonNextQuestion = document.createElement("button");
buttonNextQuestion.textContent = "Next";
buttonNextQuestion.setAttribute("id","nextQ");


const questionEl = document.getElementById("question-El");
const buttonOne = document.getElementById("button1-El");
const buttonTwo = document.getElementById("button2-El");
const buttonThree = document.getElementById("button3-El");
const buttonFour = document.getElementById("button4-El");
const scoreEl = document.getElementById("score-El")

buttonNextQuestion.addEventListener("click", function(){
  infoArr = getElementCharge();
  newQuestions(infoArr);
  buttonOne.style.backgroundColor = "white";
  buttonTwo.style.backgroundColor = "white";
  buttonThree.style.backgroundColor = "white";
  buttonFour.style.backgroundColor = "white";
  alreadyClicked = false;

  buttonNextQuestion.remove();
})




let metals = [
  Hydrogen = {
    name: "Hydrogen",
    symbol: "H",
    valence: 1,
    charge: "1+"
  },
  Lithium = {
    name: "Lithium",
    symbol: "Li",
    valence: 1,
    charge: "1+" 
  },
  Sodium = {
    name: "Sodium",
    symbol: "Na",
    valence: 1,
    charge: "1+" 
  },
  Potassium = {
    name: "Potassium",
    symbol: "K",
    valence: 1,
    charge: "1+" 
  },
  Rubidium = {
    name: "Rubidium",
    symbol: "Rb",
    valence: 1,
    charge: "1+"
  },
  Cesium = {
    name: "Cesium",
    symbol: "Cs",
    valence: 1,
    charge: "1+"
  },
  Beryllium = {
    name: "Beryllium",
    symbol: "Be",
    valence: 2,
    charge: "2+"
  },
  Magnesium = {
    name: "Magnesium",
    symbol: "Mg",
    valence: 2,
    charge: "2+"
  },
  Calcium = {
    name: "Calcium",
    symbol: "Ca",
    valence: 2,
    charge: "2+"
  },
  Strontium = {
    name: "Strontium",
    symbol: "Sr",
    valence: 2,
    charge: "2+"
  },
  Barium = {
    name: "Barium",
    symbol: "Ba",
    valence: 2,
    charge: "2+"
  },
  Aluminum = {
    name: "Aluminum",
    symbol: "Al",
    valence: 3,
    charge: "3+"
  },
  Zinc = {
    name: "Zinc",
    symbol: "Zn",
    valence: 2,
    charge: "2+"
  },
  Silver = {
    name: "Silver",
    symbol: "Ag",
    valence: 1,
    charge: "1+"
  },
  Copper1 = {
    name: "Cuperous",
    symbol: "Cu",
    valence: 1,
    charge: "1+"
  },
  Copper2 = {
    name: "Cuperic",
    symbol: "Cu",
    valence: 2,
    charge: "2+"
  },
  Iron2 = {
    name: "Ferrous",
    symbol: "Fe",
    valence: 2,
    charge: "2+"
  },
  Iron3= {
    name: "Ferric",
    symbol: "Fe",
    valence: 3,
    charge: "3+"
  },
  Tin2 = {
    name: "Stannous",
    symbol: "Sn",
    valence: 2,
    charge: "2+"
  },
  Tin4= {
    name: "Stannic",
    symbol: "Sn",
    valence: 4,
    charge: "4+"
  },
  Lead2 = {
    name: "Plumbous",
    symbol: "Pb",
    valence: 2,
    charge: "2+"
  },
  Lead4 = {
    name: "Plumbic",
    symbol: "Pb",
    valence: 4,
    charge: "4+"
  },
  Gold1 = {
    name: "Aurous",
    symbol: "Au",
    valence: 1,
    charge: "1+"
  },
  Gold3 = {
    name: "Auric",
    symbol: "Au",
    valence: 3,
    charge: "3+"
  },
  Mercury1 = {
    name: "Mercurous",
    symbol: "Hg",
    valence: 1,
    charge: "1+"
  },
  Mercury2 = {
    name: "Mercuric",
    symbol: "Hg",
    valence: 2,
    charge: "2+"
  },
  Antimony3 = {
    name: "Stibnous",
    symbol: "Sb",
    valence: 3,
    charge: "3+"
  },
  Antimony5 = {
    name: "Stibnic",
    symbol: "Sb",
    valence: 5,
    charge: "5+"
  },
  Nickel2 = {
    name: "Nickelous",
    symbol: "Ni",
    valence: 2,
    charge: "2+"
  },
  Nickel3 = {
    name: "Nickelic",
    symbol: "Ni",
    valence: 3,
    charge: "3+"
  },
  Cobalt2 = {
    name: "Cobaltous",
    symbol: "Co",
    valence: 2,
    charge: "2+"
  },
  Cobalt3 = {
    name: "Cobaltic",
    symbol: "Co",
    valence: 3,
    charge: "3+"
  },
  Manganese2 = {
    name: "Manganese(II)",
    symbol: "Mn",
    valence: 2,
    charge: "2+"
  },
  Manganese4 = {
    name: "Manganese(IV)",
    symbol: "Mn",
    valence: 4,
    charge: "4+"
  },
  Arsenic3 = {
    name: "Arsenous",
    symbol: "As",
    valence: 3,
    charge: "3+"
  },
  Arsenic5 = {
    name: "Arsenic",
    symbol: "As",
    valence: 5,
    charge: "5+"
  }
]  

let nonMetals = [
  Nitrogen = {
      name: "Nitrogen",
      symbol: "N",
      valence: 5,
      charge: "3-",
      ionicCompoundEnd: "Nitride"
  },

  Oxygen = {
      name: "Oxygen",
      symbol: "O",
      valence: 6,
      charge: "2-",
      ionicCompoundEnd: "Oxide"
  },

  Sulphur = {
      name: "Sulphur",
      symbol: "S",
      valence: 6,
      charge: "2-",
      ionicCompoundEnd: "Sulphide"
  },

  Selenium = {
      name: "Selenium",
      symbol: "Se",
      valence: 6,
      charge: "2-",
      ionicCompoundEnd: "Selenide"
  },

  Fluorine = {
      name: "Fluorine",
      symbol: "F",
      valence: 7,
      charge: "1-",
      ionicCompoundEnd: "Flouride"
  },

  Chlorine = {
      name: "Chlorine",
      symbol: "Cl",
      valence: 7,
      charge: "1-",
      ionicCompoundEnd: "Chloride"
  },

  Bromine = {
      name: "Bromine",
      symbol: "Br",
      valence: 7,
      charge: "1-",
      ionicCompoundEnd: "Bromide"
  },

  Iodine = {
      name: "Iodine",
      symbol: "I",
      valence: 7,
      charge: "1-",
      ionicCompoundEnd: "Iodide"
  },
]





buttonOne.addEventListener("click", function(){
  if(!alreadyClicked){
    alreadyClicked = true;
    if(buttonOne.textContent == infoArr[0]){
      buttonOne.style.backgroundColor = "green";
      correct++;
    } 
    else{
      buttonOne.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    console.log(correct);
    scoreEl.textContent = `Your Score is ${correct}/${totalQuestions}`;
    
  }
  document.body.appendChild(buttonNextQuestion);
})
buttonTwo.addEventListener("click", function(){
  if(!alreadyClicked){
    if(buttonTwo.textContent == infoArr[0]){

      buttonTwo.style.backgroundColor = "green";
      correct++;
    }
    else{
      buttonTwo.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    alreadyClicked = true;
    scoreEl.textContent = `Your Score is ${correct}/${totalQuestions}`;
  }
  document.body.appendChild(buttonNextQuestion);
})
buttonThree.addEventListener("click", function(){
  if(!alreadyClicked){
    if(buttonThree.textContent == infoArr[0]){
      buttonThree.style.backgroundColor = "green";
      console.log("Correct");
      correct++;
    }
    else{
      buttonThree.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    alreadyClicked = true;
    scoreEl.textContent = `Your Score is ${correct}/${totalQuestions}`;
  }
  document.body.appendChild(buttonNextQuestion);
})
buttonFour.addEventListener("click", function(){
  if(!alreadyClicked){
    if(buttonFour.textContent == infoArr[0]){
      buttonFour.style.backgroundColor = "green";
      correct++;
    }
    else{
      buttonFour.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    alreadyClicked = true;
    scoreEl.textContent = `Your Score is ${correct}/${totalQuestions}`;
  }
  document.body.appendChild(buttonNextQuestion);

  })


function getElementCharge(){
  const questionArray = [];
  const subscripts = ["sdasd", "","₂","₃","₄","₅","₆","₇","₈","₉"];
  let ElementName = "";
  let metalOrNonMetal = Math.floor(Math.random() * 2);
  if(metalOrNonMetal == 0){
    let randomElement = Math.floor(Math.random() * metals.length);
    ElementName = metals[randomElement].name;
    questionArray.push(metals[randomElement].valence);
  }
  else{
    let randomElement = Math.floor(Math.random() * nonMetals.length);
    ElementName = nonMetals[randomElement].name;
    questionArray.push(nonMetals[randomElement].valence);
  }
  let wrongCharge
  for(let i = 0; i < 3; i++){
    wrongCharge = Math.floor(Math.random() * 7) + 1;
    if(questionArray.indexOf(wrongCharge) != -1){
      while(questionArray.indexOf(wrongCharge) != -1){
        wrongCharge = Math.floor(Math.random() * 7) + 1;
      }
      
    }
    questionArray.push(wrongCharge);
  }
  questionArray.push(ElementName);
  return questionArray;
}



function newQuestions(info){
  totalQuestions++;
  infoList = info.slice();
  console.log(infoList);
  // const divButtons = document.getElementById("optionsContainer-El");
  
  //Puts all of the button elements into an array to be randomized
  const buttonList = [buttonOne,buttonTwo,buttonThree,buttonFour];

  //Loops until all the buttons have a value
  for(let i = 0; i < 4; i++){
    
    //Gets a random number from 0- infoList's length
    let randomQuestionIndex = Math.floor(Math.random() * (infoList.length-1));

    
    //sets current button from the loop to the infoList index
    buttonList[i].textContent = infoList[randomQuestionIndex];
    //removes the value thats been put into the button from infoList to get different values for each button
    if(buttonList[i].textContent == info[0]){
      correctButton = i;
    
      console.log(i);

    }
    infoList.splice(randomQuestionIndex,1);


    
   

    // console.log("The info Arr is")
    //console.log(infoArr);
    // console.log("The infoList is")
    // console.log(infoList)
  }
  console.log(infoArr);
  questionEl.textContent = "How many valence electrons does " + infoList[0] + " have?";
  // Element.remove(buttonOne);
  // Element.remove(buttonTwo);
  // Element.remove(buttonThree);
  // Element.remove(buttonFour);
  // buttonOne.textContent = infoList[1];
  // buttonTwo.textContent = infoList[2];
  // buttonThree.textContent = infoList[3];
  // buttonFour.textContent = infoList[4];
  // buttonList.append(buttonOne);
  // buttonList.append(buttonTwo);
  // buttonList.append(buttonThree);
  // buttonList.append(buttonFour);
}

function setCorrectButtonGreen(num){
  if(num == 0)
    buttonOne.style.backgroundColor = "green";
  if(num == 1)
    buttonTwo.style.backgroundColor = "green";
  if(num == 2)
    buttonThree.style.backgroundColor = "green";
  if(num == 3)
    buttonFour.style.backgroundColor = "green";
}

let infoArr = getElementCharge();
newQuestions(infoArr);

