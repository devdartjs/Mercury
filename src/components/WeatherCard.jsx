const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  return (
    <div className="bg-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center text-white backdrop-blur-md border border-white/30">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight text-slate-600">
        {name}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
        alt="Weather icon"
        className="mx-auto my-2 w-24 h-24 text-slate-600"
      />

      <p className="capitalize text-lg sm:text-xl font-medium mb-1 text-slate-600">
        {weather[0].description}
      </p>

      <p className="text-4xl font-bold mb-4 text-slate-600">
        {Math.round(main.temp)}°C
      </p>

      <div className="mt-4 space-y-2 text-sm sm:text-base text-red/90">
        <p className="text-slate-700">
          🌡️ <span className="font-medium">Feels like:</span>{" "}
          {Math.round(main.feels_like)}°C
        </p>
        <p className="text-slate-700">
          💧 <span className="font-medium">Humidity:</span> {main.humidity}%
        </p>
        <p className="text-slate-700">
          💨 <span className="font-medium">Wind:</span> {wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
