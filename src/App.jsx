import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const keyApi = import.meta.env.VITE_API_KEY;

    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=pt_br`
      );
      if (!response.ok) {
        throw new Error("Cidade não encontrada");
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
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-blue-600 text-white flex flex-col items-center justify-start p-4">
      <h1 className="text-3xl font-bold mb-6 mt-4">Previsão do Tempo</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
