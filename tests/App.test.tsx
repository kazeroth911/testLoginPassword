import { render, screen } from '@testing-library/react';
import App from "../src/App";
import React from 'react';

describe('App', () => {
  it('it should render the App', () => {
    render(<App />);
    screen.debug()
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeInTheDocument();
  });
});