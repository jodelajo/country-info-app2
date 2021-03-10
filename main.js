//Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt.
// Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.

//Maak op basis van de response de volgende string en log dit in de console:
// [country-naam] is situated in [subarea-name]. It has a population of [amount] people.

async function fetchData() {

    try {
        const country = 'Belgium'
        const result = await axios.get('https://restcountries.eu/rest/v2/name/Belgium?fullText=true');
        const response = result.data
        const countries = response[0]
        const { name, capital, subregion, population } = countries
        console.log(name, capital, subregion, population)
        const infoString = `${name} is situated in ${subregion}. It has a population of ${population} people.`
        console.log(infoString)


    } catch(e) {
        console.error(e);
    }
}

fetchData();