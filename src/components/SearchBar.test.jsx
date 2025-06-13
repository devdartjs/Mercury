/* eslint-env vitest */

import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("renders input and button", () => {
    render(<SearchBar city="" setCity={() => {}} fetchWeather={() => {}} />);
    expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("calls fetchWeather when Enter is pressed", () => {
    const fetchWeather = vi.fn();
    render(
      <SearchBar city="" setCity={() => {}} fetchWeather={fetchWeather} />
    );
    const input = screen.getByPlaceholderText(/enter city name/i);

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(fetchWeather).toHaveBeenCalled();
  });

  it("calls fetchWeather on button click", () => {
    const fetchWeather = vi.fn();
    render(
      <SearchBar city="" setCity={() => {}} fetchWeather={fetchWeather} />
    );
    const button = screen.getByRole("button", { name: /search/i });

    fireEvent.click(button);

    expect(fetchWeather).toHaveBeenCalled();
  });
});
