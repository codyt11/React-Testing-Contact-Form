// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import React from 'react';
import App from './App';
import { render } from "@testing-library/react";

test("renders app", () => {
    render(<App/>);
});

test("renders App without crashing", () => {
    render(<App />);
  });