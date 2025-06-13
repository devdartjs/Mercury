import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-orange-200 text-white flex flex-col items-center justify-start px-4 py-8 sm:px-6 lg:px-12">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 text-center">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight text-slate-100">
          🌤️ Weather Forecast
        </h1>

        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

        {error && (
          <div className="mt-6">
            <ErrorMessage message={error} />
          </div>
        )}

        {weather && (
          <div className="mt-6">
            <WeatherCard data={weather} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
