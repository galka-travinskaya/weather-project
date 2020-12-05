import { data } from 'autoprefixer';
import weatherTls from '../templates/currentWeather.hbs';
import nextWeatherTls from '../templates/nextDaysWeather.hbs';

const API_KEY = 'cffa5817950747edab2212245200112';
const BASE_URL = 'http://api.weatherapi.com/v1';

const weather =  document.querySelector('.weather');
const nextWeather = document.querySelector('.next-days-weather');

const fetchCurrentWeather = () => {
    return fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=Vinnitsa`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.location.name);
        addWeatherMarkup(data);        
    })
    .catch(err => alert('Oops! Something went wrong. Try again.'));
};

const fetchNextDaysWeather = () => {
    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=Vinnitsa&days=10&lang=ru`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.forecast.forecastday);
            addNextDaysWeatherMarcup(data.forecast.forecastday);
        })
        .catch(err => alert('Oops! Something went wrong. Try again.'));
};

const addWeatherMarkup = (data) => {
    weather.insertAdjacentHTML('beforeend', weatherTls(data));
};

const addNextDaysWeatherMarcup = (data) => {
    nextWeather.insertAdjacentHTML('beforeend', nextWeatherTls(data));
}

fetchCurrentWeather();

fetchNextDaysWeather();