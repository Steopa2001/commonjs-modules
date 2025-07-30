//Importo le funzioni
const nomi = require('./names/names.js');
const hobbies = require('./hobbies/hobbies.js')

//Chiamo le funzioni
console.log(nomi('Stefan', 'Moraru'));
console.log(hobbies('play football', 'coding', 'play tennis'));


//Creo funzione che non ha parametri
//Mi restituisce un oggetto con due proprietà: fullName ed hobbies
function getNamesAndHobbiesInfo (){
// Chiamo le funzioni con i parametri richiesti
    const fullName = nomi('Stefan', 'Moraru');
    const hobbiesList = hobbies('play football', 'coding', 'play tennis');

     // Ritorno un oggetto con i risultati
    return {
        fullName,
        hobbiesList
    }
};

console.log(getNamesAndHobbiesInfo())