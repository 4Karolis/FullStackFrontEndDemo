const token = sessionStorage.getItem('token');

if(!token){
    alert('please login in order to see weather forecast!');
    document.location.href = '/index.html';
} else {
    // fetch('https://localhost:7275/WeatherForecast', {
        fetch('https://karolisfullstackapi.azurewebsites.net/WeatherForecast', {

        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
            // arba 'Authorization' : `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then((response) => {
        const container = document.querySelector(`#weatherContainer`);
        for(let i = 0; i < response.length; i++){
            const weatherParagraph = document.createElement('p');
            weatherParagraph.innerHTML = `${response[i].date} </b> temperature: <b>${response[i].temperatureC} C , weatherr will be ${response[i].summary}</b>`
            container.append(weatherParagraph);
        }
    })
    .catch((error) => alert(error));
//changes
}