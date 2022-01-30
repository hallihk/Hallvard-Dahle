/*
Oppgaven er å finne det lengste ordet i en statisk tekst.

I denne oppgaven får du øvd på:

- bruk av for-løkke (eller forEach)
- bruk av array
- bruk av conditionals (if / else)
*/

//Sammerbeidet med Tore Pedersen


// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const showResult = document.getElementById("app");

const longestWord = () => {
// TODO: Gjør om text til array eks. ['Baby', 'cliche']
const split = text.split(' ');
console.log(split);

// TODO: Velg første ord så du har noe å sammenlikne med
const startWord= split[0].length; 
console.log(startWord);

let longestWordSoFar = startWord; 
let longestWordIs =' ';


// TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
    for (i = 0; i < split.length; i++) {
        if(split[i].length > longestWordSoFar) {
            longestWordSoFar = split[i].length;
            longestWordIs = split[i];
        };
    };
    showResult.innerHTML = 'Det lengste ordet er ' + longestWordSoFar + ' langt, ' + longestWordIs;
    return [longestWordSoFar, longestWordIs];
};
console.log(longestWord());