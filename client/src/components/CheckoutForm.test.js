import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeVisible();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  //Get the elements
  const first = screen.getByLabelText(/first name:/i);
  const last = screen.getByLabelText(/last name:/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button");
  // type values in and verify the entry
  userEvent.click(first);
  userEvent.type(first, "Patrice");
  userEvent.tab();
  expect(first).toHaveValue("Patrice");
  userEvent.type(last, "Jean");
  userEvent.tab();
  expect(last).toHaveValue("Jean");
  userEvent.type(address, "3119 Clearview Dr");
  userEvent.tab();
  expect(address).toHaveValue("3119 Clearview Dr");
  userEvent.type(city, "Davenport");
  userEvent.tab();
  expect(city).toHaveValue("Davenport");
  userEvent.type(state, "Kansas");
  userEvent.tab();
  expect(state).toHaveValue("Kansas");
  userEvent.type(zip, "35252");
  userEvent.tab();
  expect(zip).toHaveValue("35252");
  userEvent.click(button);

  //Success message should be visible
  const success = await screen.findByTestId("successMessage");
  expect(success).toBeVisible();
});
