import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";

export default function SearchBox({ updateWeather }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  let api_url = " https://api.openweathermap.org/data/2.5/weather";
  let api_key = "26f14d81014843bb05c255b1fe5c9c35";

  let getData = async () => {
    try {
      let response = await fetch(
        `${api_url}?q=${city}&limit=5&appid=${api_key}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      let jsonData = await response.json();
      let dataset = {
        cityName: jsonData.name,
        temperature: jsonData.main.temp,
        humidity: jsonData.main.humidity,
        feels_like: jsonData.main.feels_like,
        tempMax: jsonData.main.temp_max,
        tempMin: jsonData.main.temp_min,
        description: jsonData.weather[0].description,
      };
      return dataset;
    } catch (e) {
      throw e;
    }
  };

  function handleOnchange(e) {
    setCity(e.target.value);
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setCity("");
      let newInfo = await getData();
      updateWeather(newInfo);
    } catch (e) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <h2>Search City</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleOnchange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place</p>}
    </div>
  );
}
