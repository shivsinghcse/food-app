import {useEffect, useState} from "react";
import RestaurantCard, {
  RestaurantCardWithOffer,
} from "./RestaureantUtils/RestaurantCard"; // Ensure this component handles the image rendering
import Shimmer from "./SimmerUtils/Shimmer";
import {Link} from "react-router-dom";
import {RESTAURANT_MENU_API} from "../Utils/constaints";
import {useFetchAPI} from "../Utils/customHooks/useFetchAPI";

export default function Body() {
  const mainList = useFetchAPI(RESTAURANT_MENU_API);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState("");
  const [restaurantsChain, setRestaurantsChain] = useState([]);
  // offer Higher order component
  const RestaurantCardWithOfferHOC = RestaurantCardWithOffer(RestaurantCard);
  const setDataInState = () => {
    const chainData =
      mainList?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurantsChain(chainData);
    console.log("chainData", chainData);
    const restaurantData =
      mainList?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurants(restaurantData);
    console.log("restaurantData", restaurantData);
  };
  useEffect(() => {
    if (mainList) {
      setDataInState();
    }
  }, [mainList]);

  const showAllRestaurants = (restaurantsList) =>
    restaurantsList.length > 0
      ? restaurantsList.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
            className='hover:shadow-lg transition'
            data-testid='card'
          >
            {restaurant.info?.aggregatedDiscountInfoV3?.header.includes(
              "OFF",
            ) ? (
              <RestaurantCardWithOfferHOC restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))
      : null;

  const searchRestaurants = () => {
    if (filteredRestaurants !== "") {
      if (restaurants.length) {
        const filterData = restaurants.filter((res) =>
          res.info.name
            .toLowerCase()
            .includes(filteredRestaurants.toLowerCase()),
        );
        setRestaurants(filterData || []);
      }
      if (restaurantsChain.length) {
        const filterData = restaurantsChain.filter((res) =>
          res.info.name
            .toLowerCase()
            .includes(filteredRestaurants.toLowerCase()),
        );
        setRestaurantsChain(filterData || []);
      }
    } else {
      setDataInState();
    }
  };
  const topRatedRestaurants = () => {
    if (restaurants.length) {
      const filterData = restaurants.filter((res) => res.info.avgRating > 4.4);
      setRestaurants(filterData || []);
    }
    if (restaurantsChain.length) {
      const filterData = restaurantsChain.filter(
        (res) => res.info.avgRating > 4.4,
      );
      setRestaurantsChain(filterData || []);
    }
  };

  const mainBody = () => (
    <div className='p-6'>
      {/* Search Bar */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <div className='flex items-center space-x-4'>
          <input
            className='border border-gray-300 rounded-lg p-2 w-72 focus:outline-none focus:ring focus:ring-orange-300'
            type='text'
            placeholder='Search restaurants'
            value={filteredRestaurants}
            onChange={(e) => setFilteredRestaurants(e.target.value)}
          />
          <button
            className='bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition'
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <button
          className='bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition mt-4 md:mt-0'
          onClick={() => topRatedRestaurants()}
        >
          Top Rated 🌟
        </button>
      </div>

      {/* Top Restaurant Chains */}
      {restaurantsChain.length > 0 && (
        <div className='mb-8'>
          <h2
            className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'
            data-testid='top-chain'
          >
            Top Restaurant Chains
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {showAllRestaurants(restaurantsChain)}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className='w-full h-0.5 bg-gray-200 dark:bg-gray-700 my-8'></div>

      {/* Restaurants with Online Food Delivery */}
      {restaurants.length > 0 && (
        <div>
          <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
            Restaurants with Online Food Delivery
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {showAllRestaurants(restaurants)}
          </div>
        </div>
      )}
    </div>
  );

  return mainList === null ? <Shimmer /> : mainBody();
}
