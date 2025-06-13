import "./SearchBar.css";

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6 w-full">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter city name"
        className="w-full sm:w-72 px-4 py-2 rounded-xl bg-white/80 text-black placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      />
      <button onClick={fetchWeather} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
