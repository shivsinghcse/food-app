import RestaurantCard, {
  RestaurantCardWithOffer,
} from "../components/RestaureantUtils/RestaurantCard";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "./__mockData__/ResCardMock.json";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../Rduex/store";

test("Should render RestaurantCard component", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <RestaurantCard restaurant={MOCK_DATA} />
      </Provider>
    </BrowserRouter>,
  );

  const restaurantName = screen.getByText("Pizza Hut");
  expect(restaurantName).toBeInTheDocument();
});
test("Should render Resutrent card With OFFER Higher oreder Component", () => {
  const RestaurantCardWithOfferHOC = RestaurantCardWithOffer(RestaurantCard);
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <RestaurantCardWithOfferHOC restaurant={MOCK_DATA} />
      </Provider>
    </BrowserRouter>,
  );

  const RestaurantWithOffer = screen.getByText(/20% OFF/i);
  expect(RestaurantWithOffer).toBeInTheDocument();
});
