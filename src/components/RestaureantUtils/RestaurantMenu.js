import {useState} from "react";
import StarRating from "../../Utils/StarRating";
import {useParams} from "react-router-dom";
import {MENU_API} from "../../Utils/constaints";
import SimmerResMenu from "../SimmerUtils/SimmerResMenu";
import {useFetchAPI} from "../../Utils/customHooks/useFetchAPI";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const {restaurant_id} = useParams();
  const data = useFetchAPI(MENU_API + restaurant_id);
  const [isOpen, setIsOpen] = useState(0);

  if (data === null) {
    return <SimmerResMenu />;
  }

  const {
    name,
    slugs,
    city,
    locality,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    totalRatings,
  } = data?.cards[2]?.card?.card?.info || {};

  const restaurantMenuCategories =
    data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className='p-6 bg-gray-100 dark:bg-gray-900'>
      {/* Restaurant Details */}
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-8 border-t-4 border-orange-500 dark:border-orange-400'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-white mb-3 hover:text-orange-600 transition duration-300'>
          {name}
        </h1>
        <p className='text-gray-600 dark:text-gray-300 text-lg mb-3'>
          {slugs?.restaurant
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          , {locality}, {city}
        </p>
        <p className='text-gray-700 dark:text-gray-300 text-xl font-medium mb-5'>
          {cuisines.join(", ")}
        </p>
        <p className='text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6'>
          {costForTwoMessage}
        </p>

        <div className='flex items-center space-x-2'>
          <StarRating rating={avgRating} />
          <span className='text-gray-600 dark:text-gray-300 text-lg font-medium'>
            ({totalRatings} ratings)
          </span>
        </div>
      </div>

      {/* Menu Section */}
      {restaurantMenuCategories?.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          isOpen={isOpen === index ? true : false}
          setIsOpen={() => {
            isOpen === index ? setIsOpen(null) : setIsOpen(index);
          }}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
