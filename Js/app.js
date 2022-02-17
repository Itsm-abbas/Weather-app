document.getElementById('searchbtn').addEventListener('click', () => {
    let apikey = '420bf804a8683188ee88b9ead28457e1';
    let location = document.getElementById('searchvalue').value;
    let request = new XMLHttpRequest();
    request.open('Get', `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`, true);
    request.onload = function () {
        if (request.status = 200) {
            document.getElementById('cityText').classList.add('showcity')
            let json = JSON.parse(this.responseText);
            console.log(json.main.feels_like);
            // City searched
           document.getElementById('location').innerText = location;
            // Temperature of searched location
            let tempinC = (json.main.temp) - 272;
            document.querySelector('.temp').innerHTML = Math.floor(tempinC) + ' °C';
            // The status of weather..
            weatherstatus = json.weather[0].main;
            document.getElementById('weatherstatus').innerText = weatherstatus;
            // Getting weather icon...
            let weathericon = json.weather[0].icon;
            document.getElementById('weathericon').src = `http://openweathermap.org/img/wn/${weathericon}.png`;
            // Feels Like....
            let feels_likeinC = (json.main.feels_like) - 272;
            document.getElementById('feels_like').innerText = `Feels like ${Math.floor(feels_likeinC)} °C`
        } else {
            console.log('error occured');
        }
    }
    request.send()
});