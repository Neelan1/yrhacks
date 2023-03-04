let correctButton = 0;
let correct = 0;
let totalQuestions = 0;
let alreadyClicked = false;
console.log("SO₄²-");

let buttonNextQuestion = document.createElement("button");
buttonNextQuestion.setAttribute("id","nextQ");
buttonNextQuestion.textContent = "Next";

const questionEl = document.getElementById("question-El");

const buttonOne = document.getElementById("button1-El");
const buttonTwo = document.getElementById("button2-El");
const buttonThree = document.getElementById("button3-El");
const buttonFour = document.getElementById("button4-El");
const buttonContainer = document.getElementById("buttonContainer-El");

const scoreEl = document.getElementById("score-El")




buttonNextQuestion.addEventListener("click", function(){
  infoArr = getOxygenName();
  newQuestions(infoArr);
  buttonOne.style.backgroundColor = "white";
  buttonTwo.style.backgroundColor = "white";
  buttonThree.style.backgroundColor = "white";
  buttonFour.style.backgroundColor = "white";
  alreadyClicked = false;
  buttonNextQuestion.remove();
})
const polyatomics2 = [

    Bromate = {
        name: "Bromate",
        symbol: "BrO₃",
        elements: ["Br", "O"],
        charge: "1-",
        numOfOxygen: 3

    },
  
    Iodate = {
        name: "Iodate",
        symbol: "IO₃",
        elements: ["I", "O"],
        charge: "1-",
        numOfOxygen: 3
    },
  
    Nitrate = {
        name: "Nitrate",
        symbol: "NO₃",
        elements: ["N", "O"],
        charge: "1-",
        numOfOxygen: 3
    },
  
    Chlorate = {
        name: "Chlorate",
        symbol: "ClO₃",
        elements: ["Cl", "O"],
        charge: "1-",
        numOfOxygen: 3
    },
  
    Sulphate = {
        name: "Sulphate",
        symbol: "SO₄",
        elements: ["S", "O"],
        charge: "2-",
        numOfOxygen: 4
    },
  
    Carbonate = {
        name: "Carbonate",
        symbol: "CO₃",
        elements: ["C", "O"],
        charge: "2-",
        numOfOxygen: 3
    },
  
    Chromate = {
        name: "Chromate",
        symbol: "CrO₄",
        elements: ["Cr", "O"],
        charge: "2-",
        numOfOxygen: 4
    },
  
    Phosphate = {
        name: "Phosphate",
        symbol: "PO₄",
        elements: ["P", "O"],
        charge: "3-",
        numOfOxygen: 4
    }
] 
const toSuperscript = {
    "1":"",
    "2":"²",
    "3":"³"
}


const toSubscript = {
    "+":"⁺",
    "-":"⁻",
    "1":"",
    "2":"₂",
    "3":"₃",
    "4":"₄",
    "5":"₅",
    "6":"₆",
    "7":"⁺", 
    "8":"⁻"
}
const buttonsDiv = document.getElementById("buttonDiv-El");
function getOxygenName(){
    let randomPolyatomic = polyatomics2[Math.floor(Math.random() * polyatomics2.length)];
    const prefixes = ["Per", "", "", "Hypo"];
    const suffixes = ["ate", "ate", "ite", "ite"]
    let polyatomicTypeArray = [];
    const randInt = Math.floor(Math.random() * 4);
    let symbol = "";
    switch(randInt){
        case 0:
            symbol = randomPolyatomic.symbol.slice(0, -1) + toSubscript[(randomPolyatomic.numOfOxygen + 1).toString()];
            break;
        case 1: 
            symbol = randomPolyatomic.symbol;
            break;
        case 2:
            symbol = randomPolyatomic.symbol.slice(0, -1) + toSubscript[(randomPolyatomic.numOfOxygen - 1).toString()];
            break;
        case 3:
            symbol = randomPolyatomic.symbol.slice(0, -1) + toSubscript[(randomPolyatomic.numOfOxygen - 2).toString()];
            break;
    }
    polyatomicTypeArray.push(symbol);
    for(i = 0; i < 3; i++){
        wrongOxygen = randomPolyatomic.symbol.slice(0, -1) + toSubscript[Math.floor(Math.random() * 5) + 1]; //ssss
        if(polyatomicTypeArray.indexOf(wrongOxygen != -1)){
          while(polyatomicTypeArray.indexOf(wrongOxygen) != -1){
            wrongOxygen = randomPolyatomic.symbol.slice(0, -1) + toSubscript[Math.floor(Math.random() * 5) + 1];
            console.log(wrongOxygen) //ss
          }
        }
        polyatomicTypeArray.push(wrongOxygen);
      }
    const name = `${prefixes[randInt]}${(randomPolyatomic.name).toLowerCase().slice(0, -3)}${suffixes[randInt]}`;
    polyatomicTypeArray.push(name);
    return polyatomicTypeArray;
    

}
buttonOne.addEventListener("click", function(){
  if(!alreadyClicked){
    console.log("AH");
    alreadyClicked = true;
    console.log("is clicked? " + alreadyClicked);
    if(buttonOne.textContent === infoArr[0]){
      buttonOne.style.backgroundColor = "green";
      correct++;
      console.log("Correct");
    } 
    else{
      buttonOne.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    scoreEl.textContent = `Your Score is ${correct}/${totalQuestions}`;
    
  }
  document.body.appendChild(buttonNextQuestion);
})
buttonTwo.addEventListener("click", function(){
  if(!alreadyClicked){
    if(buttonTwo.textContent === infoArr[0]){
      buttonTwo.style.backgroundColor = "green";
      console.log("Correct");
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
    if(buttonThree.textContent === infoArr[0]){
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
    if(buttonFour.textContent === infoArr[0]){
      buttonFour.style.backgroundColor = "green";
      console.log("Correct");
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
  questionEl.textContent = "What is the chemical formula of " + infoList[0] + "?";
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
  
let infoArr = getOxygenName();
newQuestions(infoArr);
