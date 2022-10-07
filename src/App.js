import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [loc, setLoc] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=9a48f9585c21d962f40b0337f9ffc38a`;


  const search = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

    }
  }
  return (
    <div className="app">
      <div className="search">
        <input type='text' value={loc} onChange={(e) => setLoc(e.target.value)} placeholder="location" onKeyDown={search} />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <p>{data.main ? <h1 className="country">{data.sys.country}</h1> : null}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}

          </div>
          <div className="desc">
            <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="windspeed">
              {data.main ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
              <p>Wind speed</p>
            </div>
          </div>

        }



      </div>
    </div>
  );
}

export default App;
