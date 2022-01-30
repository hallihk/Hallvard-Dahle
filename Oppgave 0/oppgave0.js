// Oppgave 0
// Hallvard Dahle

//Oppgave 1
const fjern = document.getElementById("remove");
const fjernKnapp = document.getElementById("remove-btn");

//function fjernTekst() {
    //fjern.innerHTML = null;
//}
function fjernTekst() {
    fjern.remove();
};
fjernKnapp.addEventListener("click", fjernTekst);


//oppgave 2
const changeTekst = document.getElementById("change");
const changeKnapp = document.getElementById("change-btn");

function endre() {
    changeTekst.innerHTML = "Klarte jeg det?";
}

changeKnapp.addEventListener("click", endre);


//oppgave 3 
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
const input = document.querySelector("input");
const inputTekst = document.getElementById("input-text");
inputTekst.innerHTML = null;

function liveTekst(react){
    inputTekst.innerHTML = react.target.value;
};
input.addEventListener("input", liveTekst);
console.log(inputTekst);


//oppgave 4
const middag = ["pizza", "taco", "lasange"];
const liste = document.getElementById("ul");
const listeKnapp = document.getElementById("write-list");

const lagListe = () => {
    middag.forEach((listMiddag) => (liste.innerHTML += `<li>${listMiddag}</li>`));
};
listeKnapp.addEventListener("click", lagListe);


//oppgave 5
const lagKnapp = document.getElementById("create");
const inputTxt = document.getElementById("text");
const valgt = document.getElementById("select");
const placeholder = document.getElementById("placeholder");

const html = () => {
    const code = valgt.value
    const tekstCode = inputTxt.value;
    placeholder.innerHTML += `<${code}>${tekstCode}</${code}>`;
};
lagKnapp.addEventListener("click", html);

//oppgave 6
const listElement = document.getElementById("list");
const fjernLiBtn = document.getElementById("remove-li");

function hadeLi() {
    //const liList = listElement;
    //liList.removeChild(liList.childNodes[0])
    const liList = listElement.firstElementChild;
    if(liList) {
        listElement.removeChild(liList);
    }
};

fjernLiBtn.addEventListener("click", hadeLi);

//oppgave 7
/*Lytt til tastaturklikk på inputboks med id #name. 
Lag funksjonen som sjekker om ordet er maksimum 4 bokstaver langt. 
Hvis du krysser 4 bokstaver gjør knappen med id #order disablet eller 
gi knappen en rød border
*/
const orderBtn = document.getElementById("order");
const orderInput = document.getElementById("name");

function brukernavn() {
    const bruker = orderInput.value;
    if(bruker.length >= 5){
            orderBtn.disable = true;
            orderBtn.style = "border: 5px solid red";
    }
    else{
        orderBtn.disable = false;
        orderBtn.style = "border: ";
    }
};

orderInput.addEventListener("input", brukernavn);

//oppgave 8
/*
Hent ut alle barna av ul med klasse .children. 
Gi oddetall-barna grønn border mens partall skal ha pink. 
Bruk knappen med id #color for å gjøre endringen.
*/
//https://stackoverflow.com/questions/49603910/change-all-li-items-background-color
//const farge = document.getElementsByClassName('children');
//const farge = document.querySelectorAll(".children li");
const liElement = document.querySelectorAll(".children li");
const btnFarge = document.getElementById("color");
//const listNumbers = document.getElementsByTagName('li');

function giFarger() {
//   const fargeKontroll = Array.from(farge);
//   console.log(fargeKontroll);
//   console.log(farge);
    
    for (let i = 0; i < liElement.length; i++){
        if(i % 2 === 0 ){
            liElement[i].style = "border: 5px solid pink";
        }
        else {
            liElement[i].style = "border: 5px solid green";
        }

    };
};

btnFarge.addEventListener("click", giFarger);