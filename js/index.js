document.querySelector(`#login`).addEventListener(`submit`, (event) =>{
    event.preventDefault();

    console.log(`Login submit`);

    const loginRequest = {
        userName: event.target.name.value,
        password: event.target.password.value
    };
    // fetch(`https://localhost:7275/api/Auth/Login`, {
    fetch(`https://karolisfullstackapi.azurewebsites.net/api/Auth/Login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
    .then(response => response.json())//sekmes atveju 
    .then(result => {
        if(result.errorMessage){
            alert(result.errorMessage);
            return;
        }else{
            sessionStorage.setItem('token', result.token);
            document.location.href = '/weather.html'
        }
    })
    .catch((error) => alert(error));
});