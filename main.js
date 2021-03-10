//Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt.
// Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.

//Maak op basis van de response de volgende string en log dit in de console:
// [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
//Maak op basis van de response de volgende string en log dit in de console: The capital is [city]


async function fetchData() {

    try {
        const country = 'cuba'
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
        const response = result.data
        const countries = response[0]
        // console.log(response)
        // console.log(countries)
        const { name, capital, subregion, population, currencies, languages } = countries
        // console.log(name, capital, subregion, population, currencies)
        const infoString = `${name} is situated in ${subregion}. It has a population of ${population} people.`
        const capitalString = `The capital is ${capital}`;
        console.log(currencies)
        console.log(infoString)
        console.log(capitalString)
        // console.log(languages)
        const currencyFunction = getCurrency(currencies)
        // console.log(currencyFunction)
        const currencyString = `and you can pay with ${currencyFunction}'s.`
        console.log(currencyString)
        const languageFunction = getLanguage(languages)
        // console.log(languageFunction)
        const languageString = `They speak ${languageFunction}.`
        console.log(languageString)
    } catch(e) {
        console.error(e);
    }
}
fetchData();

//Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
//
// 1 valuta: and you can pay with [currency]'s
// 2 valuta's: and you can pay with [currency]'s and [currency]'s
function getCurrency(currencyArray){
    let total = ''
    for (let i = 0; i < currencyArray.length; i++) {
        const element = currencyArray[i].name;
        if (i === currencyArray.length -2 ) {
            total+= `${element} en `;
        } else if (i === currencyArray.length - 1){
            total += element;
        } else {
            total += `${element}, `;
        }
    }
    return total
}

//Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
//
// 1 taal: They speak [language]
// 2 talen: They speak [language] and [language]
// 3 talen: They speak [language], [language] and [language]
// etc.

function getLanguage(languageArray){
    let total = ''
    for (let i = 0; i < languageArray.length; i++) {
        const element = languageArray[i].name;
        if (i === languageArray.length -2 ) {
            total+= `${element} en `;
        } else if (i === languageArray.length - 1){
            total += element;
        } else {
            total += `${element}, `;
        }
    }
    return total
}
