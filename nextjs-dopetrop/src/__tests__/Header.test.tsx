import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

it("renders navigation links", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Left Sidebar" })).toBeInTheDocument();
});
