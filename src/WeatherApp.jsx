import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const WeatherApp = () => {
    let [data,setData]=useState({
        cityName:"Mysuru",
        temperature:"27",
        humidity:51,
        feels_like:"27.56",
        tempMax:27.56,
        tempMin:25,
        description:"haze"
    })
    function updateWeather(weatherInfo){
        setData(weatherInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
      <SearchBox updateWeather={updateWeather}/>
      <InfoBox info={data}/>
    </div>
  )
}

export default WeatherApp
