import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import MOCKDATA from "./__mockData__/SearchResMock.json";
import {BrowserRouter} from "react-router-dom";

// Mock the useFetchAPI hook
jest.mock("../Utils/customHooks/useFetchAPI", () => ({
  useFetchAPI: jest.fn(),
}));

describe("Body Component", () => {
  it("Should render Body component and check search input, button, and card component render", async () => {
    render(<Body />);

    // Wait for input field to load
    const inputField = await screen.findByRole("textbox");
    expect(inputField).toBeInTheDocument();

    // Check for search button
    const searchButton = await screen.findByText("Search");
    expect(searchButton).toBeInTheDocument();

    // Check for top-rated button
    const topRatedButton = screen.getByText("Top Rated 🌟");
    expect(topRatedButton).toBeInTheDocument();
  });
  it("renders showAllRestaurants when restaurants data is present", () => {
    const mockRestaurants = MOCKDATA;

    // Mock the API response
    const mockMainList = {
      cards: [
        {},
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {restaurants: mockRestaurants},
              },
            },
          },
        },
      ],
    };

    const useFetchAPIMock =
      require("../Utils/customHooks/useFetchAPI").useFetchAPI;
    useFetchAPIMock.mockReturnValue(mockMainList);
    // render the Body component
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );

    // Check if cards with data-testid="card" are rendered
    const restaurantCards = screen.getAllByTestId("card");
    expect(restaurantCards).toHaveLength(mockRestaurants.length);
    expect(screen.getByText("WarmOven Cake & Desserts")).toBeInTheDocument();
  });
  it("should not render showAllRestaurants when restaurants data is not present", () => {
    const mockMainList = {
      cards: [
        {},
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {restaurants: []},
              },
            },
          },
        },
      ],
    };

    const useFetchAPIMock =
      require("../Utils/customHooks/useFetchAPI").useFetchAPI;
    useFetchAPIMock.mockReturnValue(mockMainList);
    // render the Body component
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );

    // Check if cards with data-testid="card" are rendered
    const restaurantCards = screen.queryAllByTestId("card");
    expect(restaurantCards).toHaveLength(0);
  });
  it("Should render showAllResturent component when search input is match with any restaurant on click of search button", async () => {
    const mockMainList = {
      cards: [
        {},
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {restaurants: MOCKDATA},
              },
            },
          },
        },
      ],
    };

    const useFetchAPIMock =
      require("../Utils/customHooks/useFetchAPI").useFetchAPI;
    useFetchAPIMock.mockReturnValue(mockMainList);
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
    const inputField = await screen.findByRole("textbox");
    const searchButton = await screen.findByText("Search");
    fireEvent.change(inputField, {target: {value: "Pizza Hut"}});
    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(screen.getByText("Pizza Hut")).toBeInTheDocument();
    });
  });
  it("Should render showAllRestaurants component when top rated button is clicked", async () => {
    const topRatedMockRestaurants = MOCKDATA.filter(
      (restaurant) => restaurant.info.avgRating > 3.5,
    );

    const mockMainList = {
      cards: [
        {},
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {restaurants: MOCKDATA},
              },
            },
          },
        },
      ],
    };

    const useFetchAPIMock =
      require("../Utils/customHooks/useFetchAPI").useFetchAPI;
    useFetchAPIMock.mockReturnValue(mockMainList);
    // render the Body component
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );

    // Check if cards with data-testid="card" are rendered
    const restaurantCards = screen.getAllByTestId("card");

    const topRatedButton = await screen.findByText("Top Rated 🌟");
    fireEvent.click(topRatedButton);

    expect(restaurantCards).toHaveLength(topRatedMockRestaurants.length);
  });
});
