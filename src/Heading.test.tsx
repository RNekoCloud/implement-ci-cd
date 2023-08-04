import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

test("render heading text", () => {
  render(<Heading />);
  const headingTitle = screen.getByText("Ini Kepala");
  expect(headingTitle).toBeInTheDocument();
});
