import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

// Mock global fetch
vi.stubGlobal("fetch", vi.fn());

const mockWeatherData = {
  name: "London",
  main: { temp: 20, feels_like: 18, humidity: 65 },
  weather: [{ description: "clear sky", icon: "01d" }],
  wind: { speed: 3.5 },
};

describe("App component", () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  it("renders the initial UI", () => {
    render(<App />);
    expect(screen.getByText(/Weather Forecast/i)).toBeInTheDocument();
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  });

  it("fetches and displays weather data when city is searched", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockWeatherData,
    });

    render(<App />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/London/i)).toBeInTheDocument();
      expect(screen.queryByText(/City not found/i)).not.toBeInTheDocument();
    });
  });

  it("displays an error message when city is not found", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    render(<App />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "InvalidCity" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/City not found/i)).toBeInTheDocument();
      expect(screen.queryByText(/London/i)).not.toBeInTheDocument();
    });
  });
});
