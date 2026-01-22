const myArray = [];

/*
myArray.push("Hund");
myArray.push("Katt");

myArray.pop();

myArray.push("Hest");

myArray.unshift("Katt");
myArray.unshift("Katt");

myArray.shift();

console.log(myArray.toString());
*/

//
//
const textInput = document.querySelector("#textInput");
const displayList = document.querySelector("#displayList");

const addBack = document.querySelector("#addBack");
addBack.addEventListener("click", function (event) {
  event.preventDefault();

  // Sjekker vi om textInput er utfylt eller ikke. Viss utfylt legg til i listen, viss ikke utfylt vis varsel
  if (!textInput.value == "") {
    const textInputValue = textInput.value;

    myArray.push(textInputValue);

    //console.log(myArray);
  
    displayList.textContent = myArray.toString();

    textInput.value = "";
  } else {
    console.log("Noe gikk galt..");
  }
  
});

const removeBack = document.querySelector("#removeBack");
removeBack.addEventListener("click", function (event) {
  event.preventDefault();

  myArray.pop();

  //console.log(myArray);

  displayList.textContent = myArray.toString();
});

const addFront = document.querySelector("#addFront");
addFront.addEventListener("click", function (event) {
  event.preventDefault();

  if (!textInput == "") {
    const textInputValue = textInput.value;

    myArray.unshift(textInputValue);

    displayList.textContent = myArray.toString();

    textInput.value = "";
  } else {
    console.log("Noe gik galt forran..");
  }
});

const removeFront = document.querySelector("#removeFront");
removeFront.addEventListener("click", function (event) {
  event.preventDefault();

  myArray.shift();

  displayList.textContent = myArray.toString();
});
























// Array til senere så vi slipper å skrive den manuelt selv om vi trenger den ;)
/*const dagligvarer = [
  "Melk",
  "Brød",
  "Smør",
  "Ost",
  "Yoghurt",
  "Egg",
  "Kjøttdeig",
  "Kylling",
  "Fiskekaker",
  "Pølse",
  "Poteter",
  "Løk",
  "Rømme",
  "Fløte",
  "Grønnsåpe",
  "Blåbær",
  "Jordbær",
  "Eplejuice",
  "Sjokolade",
  "Kjeks",
];*/
