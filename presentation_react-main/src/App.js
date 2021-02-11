import React from 'react'
import Weather from './components/weather';
//import UtilisateurService from './service';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom' */


function App(){
  return (
    <div>
      <Weather/>
    </div>
  );
}

export default App;


/*

const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = '**********demander une api key a openweather'

let HTTpHeaders = new Headers()
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    cache: 'default',
    mode: 'cors'
};

class MeteoService {
    getMeteoByVille = async (ville) => {
        return await fetch(`${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`, init).then(res => res.json())
    }
  }

*/