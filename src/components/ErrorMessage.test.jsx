// src/components/ErrorMessage.test.jsx
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message passed via props", () => {
    const testMessage = "This is an error!";
    render(<ErrorMessage message={testMessage} />);
    // Verifica se o texto está no documento
    expect(screen.getByText(`⚠️ ${testMessage}`)).toBeInTheDocument();
  });

  it("renders the warning icon ⚠️", () => {
    render(<ErrorMessage message="Error" />);
    // Busca pelo ícone de aviso
    expect(screen.getByText(/⚠️/)).toBeInTheDocument();
  });
});
