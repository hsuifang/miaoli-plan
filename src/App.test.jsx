import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

describe("App", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    cleanup();
  });

  test.each`
    name            | testId
    ${"navigation"} | ${"navigation"}
    ${"home"}       | ${"home"}
    ${"footer"}     | ${"footer"}
  `("has $name component", ({ testId }) => {
    const target = screen.getByTestId(testId);
    expect(target).toBeInTheDocument();
  });
});
