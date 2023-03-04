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

