import React ,{ useState,useEffect}from 'react'

const WeatherCard = ({TempInfo}) => {
    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = TempInfo;
    const [weatherState, setWeatheState] = useState("");

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Mist":
            setWeatheState("wi-dust");
            break;
  
          default:
            setWeatheState("wi-day-sunny");
            break;
        }
      }
    }, [weathermood]);

    let sec = sunset;
    let date = new Date(sec*1000);
    let timestr =  `${date.getHours()}:${date.getMinutes()} `;
    return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weathermood}</div>
                <div className='place'>
                    {name},{country}</div>
            </div>
        </div>
        <div className='date'> { new Date().toLocaleString()}</div>

        
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">     
                    <span>
                        <i className={"wi wi-sunset"}></i>
                    </span>
                    <span className="extra-info-leftside">
                    {timestr} PM <br />
                    Sunset
                    </span>
                </div>
                <div className="two-sided-section">     
                    <span>
                        <i className={"wi wi-humidity"}></i>
                    </span>
                    <span className="extra-info-leftside">
                    {humidity} <br />
                    Humidity
                    </span>
                </div>
            </div>  
            <div className='weather-extra-info'>
                <div className="two-sided-section">     
                        <span>
                            <i className={"wi wi-rain"}></i>
                        </span>
                        <span className="extra-info-leftside">
                        {pressure} <br />
                        Pressure
                        </span>
                </div>
                <div className="two-sided-section">     
                        <span>
                            <i className={"wi wi-strong-wind"}></i>
                        </span>
                        <span className="extra-info-leftside">
                        {speed}<br />
                        Wind
                        </span>
                 </div>
            </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
