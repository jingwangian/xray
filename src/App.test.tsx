import React from "react";
import { render } from '@testing-library/react'
import App from "./App";

describe("Test App Component", () => {
  it("Has App div", () => {
    const { container } = render(<App/>);
    expect(container.getElementsByClassName('App').length).toBe(1);
    expect(container.getElementsByTagName('img').length).toBe(1);
    expect(container.getElementsByTagName('button').length).toBe(1);
  });
});
