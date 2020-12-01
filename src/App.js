import React from 'react'
import Router from './router'
import {BrowserRouter} from 'react-router-dom'
import './Styles/Log.css'
import Login from './Pages/LoginPage'
import SignUp from './Pages/SignUpPage'
import Weather from './Pages/Weather'

function Weather() {
  return (
    <div>
   <BrowserRouter>
      <Router/>
   </BrowserRouter>
   </ Log>
</div>
  );
}

export default Weather;
