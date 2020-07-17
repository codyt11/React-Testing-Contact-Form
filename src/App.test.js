import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'
import { act } from "react-dom/test-utils";


test('ContactForm adds new users to the list', () => {
  act(() => {
    render(<ContactForm />);
  })

  //Grab the text Inputs
  const firstNameInput = screen.getByText(/first name/i);
  const lastNameInput = screen.getByText(/last name/i);
  const emailInput = screen.getByText(/email/i);
  const messageInput = screen.getByText(/message/i);

  //Grab the submit inputs
  const submitButton = screen.getByRole('button', /submit/i)

  act(() => {
    fireEvent.change(firstNameInput, { target: { ref: 'Cody' } })
    fireEvent.change(lastNameInput, { target: { ref: 'Townley' } })
    fireEvent.change(emailInput, { target: { ref: 'Cody@Townley.com' } })
    fireEvent.change(messageInput, { target: { ref: 'test message' } })

    //Fire the submit event
    fireEvent.click(submitButton)
  })
  expect.objectContaining(expect.anything())
})


