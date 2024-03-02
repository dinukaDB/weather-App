import { useState } from "react";
import "./App.css";

const api = {
  //key: "2a62697446e32e4a3310735a9a324a73",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Weather App</h1>
          <div>
            <input
              type="text"
              placeholder="Enter City/Town..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
          </div>

          {typeof weather.main != "undefined" ? (
            <div>
              <p>{weather.name}</p>
              <p>{weather.main?.temp} *C</p>
              <p>{weather.weather?.[0].main}</p>
              <p>{weather.weather?.[0].description}</p>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
    </>
  );
}

export default App;
