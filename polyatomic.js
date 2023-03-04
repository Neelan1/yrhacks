let correctButton = 0;
console.log("SO₄²-");

let buttonNextQuestion = document.createElement("button");
buttonNextQuestion.textContent = "Click For Next Question";

const questionEl = document.getElementById("question-El");

const buttonOne = document.getElementById("button1-El");
const buttonTwo = document.getElementById("button2-El");
const buttonThree = document.getElementById("button3-El");
const buttonFour = document.getElementById("button4-El");
const buttonContainer = document.getElementById("buttonContainer-El");
buttonNextQuestion.addEventListener("click", function(){
  infoArr = getPolyatomic();
  newQuestions(infoArr);
  buttonOne.style.backgroundColor = "white";
  buttonTwo.style.backgroundColor = "white";
  buttonThree.style.backgroundColor = "white";
  buttonFour.style.backgroundColor = "white";
  buttonNextQuestion.remove();
})


let polyatomics = [

    Bromate = {
        name: "Bromate",
        symbol: "BrO₃",
        elements: ["Br", "O"],
        charge: "1-"
    },
  
    Iodate = {
        name: "Iodate",
        symbol: "IO₃",
        elements: ["I", "O"],
        charge: "1-"
    },
  
    Nitrate = {
        name: "Nitrate",
        symbol: "NO₃",
        elements: ["N", "O"],
        charge: "1-"
    },
  
    Chlorate = {
        name: "Chlorate",
        symbol: "ClO₃",
        elements: ["Cl", "O"],
        charge: "1-"
    },
  
    Sulphate = {
        name: "Sulphate",
        symbol: "SO₄",
        elements: ["S", "O"],
        charge: "2-"
    },
  
    Carbonate = {
        name: "Carbonate",
        symbol: "CO₃",
        elements: ["C", "O"],
        charge: "2-"
    },
  
    Chromate = {
        name: "Chromate",
        symbol: "CrO₄",
        elements: ["Cr", "O"],
        charge: "2-"
    },
  
    Phosphate = {
        name: "Phosphate",
        symbol: "PO₄",
        elements: ["P", "O"],
        charge: "3-"
    },
  
    Ammonium = {
        name: "Ammonium",
        symbol: "NH₄",
        elements: ["N", "H"],
        charge: "1+"
    },
  
    Acetate = {
        name: "Acetate",
        symbol: "CH₃COO",
        elements: ["C", "H", "C", "O", "O"],
        charge: "1-"
    },
  
    Bicarbonate = {
        name: "Bicarbonate",
        symbol: "HCO₃",
        elements: ["H", "C", "O"],
        charge: "1-"
    },
  
    Dichromate = {
        name: "Dichromate",
        symbol: "Cr₂O₇",
        elements: ["Cr", "O"],
        charge: "2-"
    },
  
    Hydroxide = {
        name: "Hydroxide",
        symbol: "OH",
        elements: ["O", "H"],
        charge: "1-"
    },
  
    Thiocyanate = {
        name: "Thiocyanate",
        symbol: "SCN",
        elements: ["S", "C", "N"],
        charge: "1-"
    },
  
    Permanganate = {
        name: "Permanganate",
        symbol: "MnO₄",
        elements: ["Mn", "O"],
        charge: "1-"
    },
  
    Cyanate = {
        name: "Cyanate",
        symbol: "OCN",
        elements: ["O", "C", "N"],
        charge: "1-"
    },
  
    Cyanide = {
        name: "Cyanide",
        symbol: "CN",
        elements: ["C", "N"],
        charge: "1-"
    },
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
function getRandomPolyatomic(polyatomicElements)
{
let result = "";
result += `${polyatomicElements[0]}${toSubscript[(Math.floor((Math.random() * 1)) + 1).toString()]}`;  
for(let i = 1; i < polyatomicElements.length; i++){
    result += `${polyatomicElements[i]}${toSubscript[(Math.floor((Math.random() * 3)) + 1).toString()]}`; 
    
}
result += `${toSuperscript[(Math.floor((Math.random() * 3)) + 1).toString()]}${toSubscript[(Math.floor((Math.random() * 2)) + 7).toString()]}` 
return result;
}

function getPolyatomic()
{
let randomPolyatomic = polyatomics[Math.floor(Math.random() * polyatomics.length)];
let polyatomicArray = [];
let polyatomicCharge = randomPolyatomic.charge.slice(0, 1);
let polyatomicSign = randomPolyatomic.charge.slice(1);
polyatomicArray.push(`${randomPolyatomic.symbol}${toSuperscript[polyatomicCharge]}${toSubscript[polyatomicSign]}`);

let wrongPolyatomic;
for(let i = 0; i < 3; i++){

    wrongPolyatomic = getRandomPolyatomic(randomPolyatomic.elements); //ssssFm
    if(polyatomicArray.indexOf(wrongPolyatomic) != -1){
        while(polyatomicArray.indexOf(wrongPolyatomic) != -1){
            wrongPolyatomic = getRandomPolyatomic(randomPolyatomic.elements);
        }
    }
    polyatomicArray.push(wrongPolyatomic);
}
polyatomicArray.push(randomPolyatomic.name);
return polyatomicArray;
}

buttonOne.addEventListener("click", function(){
    if(buttonOne.textContent === infoArr[0]){
      buttonOne.style.backgroundColor = "green";
      console.log("Correct");
    } 
    else{
      buttonOne.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    document.body.appendChild(buttonNextQuestion);
  })
buttonTwo.addEventListener("click", function(){
    if(buttonTwo.textContent === infoArr[0]){
      buttonTwo.style.backgroundColor = "green";
      console.log("Correct");
    }
    else{
      buttonTwo.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    document.body.appendChild(buttonNextQuestion);
  })
buttonThree.addEventListener("click", function(){
    if(buttonThree.textContent === infoArr[0]){
      buttonThree.style.backgroundColor = "green";
      console.log("Correct");
    }
    else{
      buttonThree.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    document.body.appendChild(buttonNextQuestion);
  })
buttonFour.addEventListener("click", function(){
    if(buttonFour.textContent === infoArr[0]){
      buttonFour.style.backgroundColor = "green";
      console.log("Correct");
    }
    else{
      buttonFour.style.backgroundColor = "red";
      setCorrectButtonGreen(correctButton);
    }
    document.body.appendChild(buttonNextQuestion);
  })
  
function newQuestions(info){
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

console.log(getPolyatomic());
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
  
  let infoArr = getPolyatomic();
  newQuestions(infoArr);

