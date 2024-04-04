import React, { useEffect, useState } from 'react'
import "./style.css"
import WeatherCard from './weatherCard';

function Temp() {
    const [searchValue,setSearchValue]=useState("Indore");
    const [TempInfo,SettempInfo]=useState({});
    const getWeatherInfo= async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5c0a3ec8792bc96567b4cedf61b4430d`;
            const res = await fetch(url);
            const data= await res.json();
            
            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
        
            const myNewWeather ={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }
            SettempInfo(myNewWeather);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getWeatherInfo();
    },[]);
  return (
    <>
      <div className='wrap'> 
        <div className='search'>
            <input 
            type="search" 
            placeholder='search...'
            autoFocus
            className='serchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchButton' type='button' onClick={getWeatherInfo}> Search</button>
        </div>
      </div>
      <WeatherCard TempInfo={TempInfo}/>
    </>
  );
};

export default Temp
