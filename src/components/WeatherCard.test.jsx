import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

describe("WeatherCard", () => {
  const mockData = {
    name: "São Paulo",
    main: {
      temp: 25.3,
      feels_like: 27.1,
      humidity: 65,
    },
    weather: [
      {
        description: "céu limpo",
        icon: "01d",
      },
    ],
    wind: {
      speed: 3.5,
    },
  };

  it("renders the city name", () => {
    render(<WeatherCard data={mockData} />);
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
  });

  it("renders the weather icon", () => {
    render(<WeatherCard data={mockData} />);
    const img = screen.getByAltText("Weather icon");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("01d");
  });

  it("renders the weather description", () => {
    render(<WeatherCard data={mockData} />);
    expect(screen.getByText(/céu limpo/i)).toBeInTheDocument();
  });

  it("renders the current temperature", () => {
    render(<WeatherCard data={mockData} />);
    expect(screen.getByText("25°C")).toBeInTheDocument();
  });

  it('renders the "feels like" temperature', () => {
    render(<WeatherCard data={mockData} />);
    // Encontra o span com "Feels like:" e sobe para o parágrafo pai
    const feelsLikeSpan = screen.getByText(/Feels like:/i);
    const feelsLikeParagraph = feelsLikeSpan.closest("p");
    expect(feelsLikeParagraph).toHaveTextContent("27°C");
  });

  it("renders the humidity", () => {
    render(<WeatherCard data={mockData} />);
    const humiditySpan = screen.getByText(/Humidity:/i); // Pega o <span> com o texto "Humidity:"
    const humidityParagraph = humiditySpan.closest("p"); // Sobe para o <p> pai, que tem todo o texto "Humidity: 65%"
    expect(humidityParagraph).toHaveTextContent("65%");
  });

it("renders the wind speed", () => {
  render(<WeatherCard data={mockData} />);
  const windSpan = screen.getByText(/Wind:/i);        // seleciona o span com "Wind:"
  const windParagraph = windSpan.closest('p');        // seleciona o <p> que engloba todo o texto
  expect(windParagraph).toHaveTextContent("3.5 m/s"); // verifica se contém "3.5 m/s"
});

});
