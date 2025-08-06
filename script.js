async function fetchWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "3165c5b210e5158861bfa21c5d77845d";  // ✅ Use your working API key

  if (!city) {
    document.getElementById("weatherResult").innerText = "⚠️ Please enter a city name!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const wind = data.wind.speed;

      document.getElementById("weatherResult").innerHTML =
        `<strong>City:</strong> ${data.name} <br>
         🌡️ Temperature: ${temp}°C<br>
         🌥️ Condition: ${condition}<br>
         💨 Wind Speed: ${wind} m/s`;
    } else {
      document.getElementById("weatherResult").innerText = "❌ City not found!";
    }
  } catch (error) {
    console.log(error);
    document.getElementById("weatherResult").innerText = "⚠️ Error fetching weather!";
  }
}
