import React, { useState } from 'react';
import '../index.css'
import axios from 'axios'   
import config from '../config'

const BASE = config.base
const KEY = config.key

const Weather = () =>{
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [search,setSearch] = useState(null)
    
    const Search =(e) => {
        e.preventDefault()
        if(country&& city){

            axios.get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
            .then((res) =>{
                setCountry('');
                setCity('');
                setSearch(...res.data);
                console.log(res.data);
            })
                .catch((error) =>{
                    console.log(error)
        })
        }}
        

    const handleCountry = (e) =>{
        setCountry(e.target.value)
    }    
    const handleCity = (e) =>{
        setCity(e.target.value)
    }    
        return(
            
            <div>
                {
                    !search? (
                    <div>
                        <input onChange={handleCountry} value={country} />
                        <input onChange={handleCity} value={city} />
                        <button onClick={Search}></button>
                        </div>
                        ):(
                            <h1> {`${search.location.country}, ${search.location.name}`}</h1>
        )
    }
    </div>
 
) ;
}
 export default Weather 