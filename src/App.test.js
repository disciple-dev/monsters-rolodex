import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders monsters rolodex title", () => {
  render(<App />);
  const linkElement = screen.getByText(/monsters rolodex/i);
  expect(linkElement).toBeInTheDocument();
});
