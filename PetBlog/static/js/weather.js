const $weather = document.getElementById('weather');

navigator.geolocation.getCurrentPosition(positionSucsess, positionError)

function positionSucsess({coords}) {
  (async () => {
    const weatherData = await getWeather(coords.latitude, coords.longitude);
    console.log(weatherData);
    const data = await weatherData;
    $weather.append(createLog(data));
  })();
}

function positionError() {
  alert("There was an error getting your location. Please allow us to use your location and refresh the page")
}

async function getWeather(lat, lon) {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true`);
  const json = await response.json();
  return json;
}

function createLog(json) {
  const $el = document.createElement('div');
  $el.classList.add('group-item');
  const $math = Math.round(json.current_weather.temperature)
  const utcTime = new Date(json.current_weather.time)
  const offsetMinutes = utcTime.getTimezoneOffset();
  const localTime = new Date(utcTime.getTime() - offsetMinutes * 60000);
  const hour = localTime.getHours();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  $el.innerHTML = `<strong>Current temperature: ${$math} &#8451;</strong>
                  <p>${formattedHour} ${ampm}</p>`;
  return $el;
}