jest.mock("../Utils/img/RestaurantLogo.png", () => "test-logo.png"); //moking image path

import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../components/Header/Header";
import {Provider} from "react-redux";
import store from "../Rduex/store";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header component", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
  expect(loginButton).toBeInTheDocument();

  //   const loginButton = screen.getByText("Login");
  //   expect(loginButton).toBeInTheDocument();
});

test("Should render Header Cart component", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartButton = screen.getByText(/Cart/i);
  expect(cartButton).toBeInTheDocument();
});
test("Should login button chage to Logout", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name: "Logout"});
  expect(logoutButton).toBeInTheDocument();
});
