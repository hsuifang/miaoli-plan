import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Navigation from ".";

describe("Navigation", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    cleanup();
  });

  test("has a logo", () => {
    const target = screen.queryByText("Logo");
    expect(target).toBeInTheDocument();
  });

  test.each`
    name
    ${"行程表"}
    ${"注意事項"}
    ${"人員"}
  `("has $name content", ({ name }) => {
    const target = screen.queryByText(name);
    expect(target).toBeInTheDocument();
  });
});
