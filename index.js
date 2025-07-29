//Importo le funzioni
const nomi = require('./names/names.js');
const hobbies = require('./hobbies/hobbies.js')

//Chiamo le funzioni
console.log(nomi('Giuseppe', 'Verdi'));
console.log(hobbies('play football', 'sleep', 'play tennis'));


//Creo funzione che non ha parametri
//Mi restituisce un oggetto con due proprietà: fullName ed hobbies
function getNamesAndHobbiesInfo (){
// Chiamo le funzioni con i parametri richiesti
    const fullName = nomi('Giuseppe', 'Verdi');
    const hobbiesList = hobbies('play football', 'sleep', 'play tennis');

   
};

console.log(getNamesAndHobbiesInfo())