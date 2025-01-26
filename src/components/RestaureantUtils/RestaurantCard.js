import StarRating from "../../Utils/StarRating";
import {CDN_URL} from "../../Utils/constaints";

export default function RestaurantCard(props) {
  const {cloudinaryImageId, name, costForTwo, avgRatingString, sla, cuisines} =
    props.restaurant.info;

  return (
    <div className='bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition p-4'>
      {/* Image */}
      <img
        className='w-full h-40 object-cover rounded-md mb-4'
        src={CDN_URL + cloudinaryImageId}
        alt='Restaurant'
      />

      {/* Restaurant Details */}
      <div>
        {/* Name */}
        <h3 className='text-lg font-semibold text-gray-800 dark:text-white truncate'>
          {name}
        </h3>

        {/* Cuisines */}
        <h4 className='text-sm text-gray-500 dark:text-gray-400 mt-1 truncate'>
          {cuisines.join(", ")}
        </h4>

        {/* Cost for Two */}
        <h3 className='text-sm text-gray-700 dark:text-gray-300 mt-2'>
          <span className='font-semibold'>Rs:</span> {costForTwo}
        </h3>

        {/* Rating */}
        <div
          className={`flex items-center mt-2 ${
            avgRatingString < 4
              ? "text-orange-500 dark:text-orange-800"
              : "text-green-500 dark:text-green-800"
          }`}
        >
          <StarRating rating={avgRatingString} />
        </div>

        {/* Delivery Time */}
        <h4 className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
          Delivered in {sla.deliveryTime} min
        </h4>
      </div>
    </div>
  );
}
// Resutrent card With OFFER Higher oreder Component
export const RestaurantCardWithOffer = (Component) => {
  return (props) => {
    return (
      <div className='relative'>
        {/* Offer Label */}
        <h5 className='text-sm text-white bg-orange-500 absolute top-2 left-2 px-2 py-1 font-bold rounded-md shadow-md dark:bg-black dark:text-gray-200'>
          {`${props.restaurant.info?.aggregatedDiscountInfoV3?.header} ${props.restaurant.info?.aggregatedDiscountInfoV3?.subHeader}`}
        </h5>
        {/* Original Component */}
        <Component {...props} />
      </div>
    );
  };
};
