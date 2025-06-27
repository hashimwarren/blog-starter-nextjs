import { render, screen } from "@testing-library/react";
import Banner from "../components/Banner";

test("heading text", () => {
  render(<Banner />);
  expect(screen.getByRole("heading", { name: /howdy/i })).toBeInTheDocument();
});
