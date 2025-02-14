// weather.js
document.addEventListener('DOMContentLoaded', function () {
    const weatherContainer = document.getElementById('weather-container');

    // Replace with your own API key and city
    const apiKey = '64081c6edb07a9de4af7a5b173ea6d59';
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                weatherContainer.innerHTML = `
                    <h2>${city}</h2>
                    <p>${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                `;
            } else {
                weatherContainer.innerHTML = `<p>Unable to fetch weather data: ${data.message}</p>`;
            }
        })
        .catch(error => {
            weatherContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
});
