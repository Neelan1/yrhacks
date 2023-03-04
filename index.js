



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
    name: "Manganous",
    symbol: "Mn",
    valence: 2,
    charge: "2+"
  },
  Manganese4 = {
    name: "Manganic",
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
      elements: ["N, H"],
      charge: "1+"
  },

  Acetate = {
      name: "Acetate",
      symbol: "CH₃COO",
      elements: ["C", "H", "C", "O", "O"],
      charge: "1-",
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

const buttonsDiv = document.getElementById("buttonDiv-El");
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
console.log(getPolyatomic());
function getIonicCompound (){
  let randomMetal = Math.floor(Math.random() * metals.length);
  let randomNonMetal = Math.floor(Math.random() * nonMetals.length);
  const subscripts = ["sdasd", "","₂","₃","₄","₅","₆","₇","₈","₉"];
  const metal = metals[randomMetal];
  const nonMetal = nonMetals[randomNonMetal];
  let ionicCompound = `${metal.name} ${nonMetal.ionicCompoundEnd}`;
  const questionArray = [];
  
  let correctIonic = "";
  let metalCharge = parseInt(metal.charge.slice(0, 1));
  let nonMetalCharge = parseInt(nonMetal.charge.slice(0, 1));
  if(metalCharge % 5 == 0 && nonMetalCharge % 5 == 0 )
  {
     metalCharge = metalCharge/5;
     nonMetalCharge = nonMetalCharge/5; 
  }
  else if(metalCharge % 4 == 0 && nonMetalCharge % 4 == 0 ){
    metalCharge = metalCharge/4;
    nonMetalCharge = nonMetalCharge/4; 

  }
  else if(metalCharge % 3 == 0 && nonMetalCharge % 3 == 0 ){
    metalCharge = metalCharge/3;
    nonMetalCharge = nonMetalCharge/3; 

  }
  else if(metalCharge % 2 == 0 && nonMetalCharge % 2 == 0 ){
    
    metalCharge = metalCharge/2;
    nonMetalCharge = nonMetalCharge/2; 

  }
  correctIonic = `${metal.symbol}${subscripts[nonMetalCharge]}${nonMetal.symbol}${subscripts[metalCharge]}`;
  questionArray.push(correctIonic);
  let wrongIonic;
  for(i = 0; i < 4; i++){
    wrongIonic = `${metal.symbol}${subscripts[Math.floor((Math.random() * 6)) + 1]}${nonMetal.symbol}${subscripts[Math.floor((Math.random() * 6)) + 1]}`;
    if(questionArray.indexOf(wrongIonic) != -1){
      while(questionArray.indexOf(wrongIonic) != -1){
        wrongIonic = `${metal.symbol}${subscripts[Math.floor((Math.random() * 6)) + 1]}${nonMetal.symbol}${subscripts[Math.floor((Math.random() * 6)) + 1]}`;
      }
    }
    questionArray.push(wrongIonic);
  }
  
  

  questionArray.push(ionicCompound);
  
  return questionArray;
}





const buttonOne = document.getElementById("button1-El");
const buttonTwo = document.getElementById("button2-El");
const buttonThree = document.getElementById("button3-El");
const buttonFour = document.getElementById("button4-El");

buttonOne.addEventListener("click", function(){
  if(buttonOne.textContent === infoArr[0]){
    buttonOne.style.backgroundColor = "green";
    console.log("Correct");
  } 
  else{
    //buttonOne.style.backgroundColor("red");
  }
  infoArr = getIonicCompound();
  newQuestions(infoArr);
})
buttonTwo.addEventListener("click", function(){
  if(buttonTwo.textContent === infoArr[0]){
    buttonTwo.style.backgroundColor = "green";
    console.log("Correct");
  }
  else{
    //buttonTwo.style.backgroundColor("red");
  }
  infoArr = getIonicCompound();
  newQuestions(infoArr);
})
buttonThree.addEventListener("click", function(){
  if(buttonThree.textContent === infoArr[0]){
    buttonThree.style.backgroundColor = "green";
    console.log("Correct");
  }
  else{
    //buttonThree.style.backgroundColor("red");
  }
  infoArr = getIonicCompound();
  newQuestions(infoArr);
})
buttonFour.addEventListener("click", function(){
  if(buttonFour.textContent === infoArr[0]){
    buttonFour.style.backgroundColor = "green";
    console.log("Correct");
  }
  else{
    //buttonFour.style.backgroundColor("red");
  }
  infoArr = getIonicCompound();
  newQuestions(infoArr);
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
    infoList.splice(randomQuestionIndex,1);


    
   

  }
  

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



let infoArr = getIonicCompound();
newQuestions(infoArr);

