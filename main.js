//Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt.
// Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.

async function fetchData() {
    try {
        const country = 'Belgium'
        const result = await axios.get('https://restcountries.eu/rest/v2/name/Belgium?fullText=true');
        console.log(result);
        const response = result.data;
        console.log(response)
        const countries = response[0].name
        console.log(countries)
    } catch(e) {
        console.error(e);
    }
}

fetchData();