const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.15)] w-full max-w-sm text-center text-white transition-all duration-300">
      <h2 className="text-3xl font-bold mb-3 tracking-wide text-cyan-300 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)] font-futuristic">
        {name}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
        alt="Weather icon"
        className="mx-auto my-3 w-24 h-24"
      />

      <p className="capitalize text-xl font-medium mb-2 text-cyan-100">
        {weather[0].description}
      </p>

      <p className="text-5xl font-extrabold mb-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">
        {Math.round(main.temp)}°C
      </p>

      <div className="mt-4 space-y-2 text-sm sm:text-base text-cyan-200 font-light">
        <p>
          🌡️ <span className="font-medium text-white">Feels like:</span>{" "}
          {Math.round(main.feels_like)}°C
        </p>
        <p>
          💧 <span className="font-medium text-white">Humidity:</span>{" "}
          {main.humidity}%
        </p>
        <p>
          💨 <span className="font-medium text-white">Wind:</span> {wind.speed}{" "}
          m/s
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
