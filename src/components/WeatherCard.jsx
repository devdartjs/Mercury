const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  return (
    <div className="bg-white/20 p-6 rounded-xl shadow-xl w-80 text-center backdrop-blur-md">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
      <p className="text-xl">{weather[0].description}</p>
      <p className="text-3xl font-bold">{Math.round(main.temp)}°C</p>
      <div className="mt-4 space-y-1 text-sm">
        <p>🌡️ Sensação térmica: {Math.round(main.feels_like)}°C</p>
        <p>💧 Umidade: {main.humidity}%</p>
        <p>💨 Vento: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
