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
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-start px-4 py-10 sm:px-6 lg:px-12">
      <div className="w-full max-w-2xl bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.2)] p-6 sm:p-10 text-center transition-all duration-300">
        <h1 className="text-5xl font-extrabold mb-10 tracking-wider text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] font-futuristic">
          🌤️ Weather Forecast
        </h1>

        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

        {error && (
          <div className="mt-8">
            <ErrorMessage message={error} />
          </div>
        )}

        {weather && (
          <div className="mt-8 ml-24">
            <WeatherCard data={weather} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
