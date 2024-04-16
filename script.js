function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    let city = searchInputElement.value;
    cityElement.innerHTML = city;
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ac0e90fab3b874b0te420f3c3fe852oa`;
    axios.get(apiURL).then(displayTemperature);
  }
  
  function displayTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let city = response.data.city;
    let country = response.data.country;
    let description = response.data.condition.description;
    let temperatureElement = document.querySelector(".current-temperature-value");
    temperatureElement.innerHTML = `${temperature}`;
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateELement.innerHTML = formatDate(currentDate);
  