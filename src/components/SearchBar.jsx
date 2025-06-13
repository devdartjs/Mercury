const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite o nome da cidade"
        className="px-4 py-2 rounded-md text-black w-64 focus:outline-none"
      />
      <button
        onClick={fetchWeather}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-md transition"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
