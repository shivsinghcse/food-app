import {useState} from "react";
import {BsCart3} from "react-icons/bs";
import {FaPlus, FaMinus, FaAngleDown, FaAngleUp} from "react-icons/fa";
import {RESTAURANT_MENU_IMG} from "../../Utils/constaints";
import Shimmer from "../SimmerUtils/Shimmer";
import {useDispatch, useSelector} from "react-redux";
import {
  addItem,
  decreaseQuantity,
  increaseQuantity,
} from "../../Rduex/cartSlice";
import {FaMedal} from "react-icons/fa6";

function RestaurantCategory({data, isOpen, setIsOpen}) {
  const {items} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const checkExistItemInStore = (item) => {
    const existingItem = items.find(
      (cartItem) => cartItem.id === item.card.info.id,
    );
    return existingItem ? existingItem.quantity : 0;
  };

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.card.info.id,
        name: item.card.info.name,
        price: item.card.info.price / 100 || item.card.info.defaultPrice / 100,
        image: item.card.info.imageId
          ? `${RESTAURANT_MENU_IMG}${item.card.info.imageId}`
          : "https://via.placeholder.com/200x150",
        quantity: 1,
      }),
    );
  };

  return (
    <div className='w-10/12 mx-auto mb-8'>
      {data.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='border dark:border-gray-700 rounded-lg overflow-hidden'>
          {/* Accordion Header */}
          <button
            onClick={() => setIsOpen()}
            className={`w-full flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-800 font-semibold text-lg ${
              isOpen ? "rounded-t-lg" : "rounded-lg"
            }`}
          >
            <span className='text-lg font-bold text-Black '>
              {`${data?.title} (
              ${data?.itemCards?.length})`}
            </span>
            <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
          </button>

          {/* Accordion Content */}
          {isOpen && (
            <div className='bg-white dark:bg-gray-900 p-4'>
              <ul className='flex flex-col gap-6'>
                {data?.itemCards?.map((item) => {
                  const quantity = checkExistItemInStore(item);

                  return (
                    <li
                      key={item.card.info.id}
                      className='flex flex-row items-center bg-orange-50 dark:bg-gray-800 rounded-lg shadow-lg  p-4 hover:shadow-xl transition duration-300  h-[200px] space-x-4'
                    >
                      {/* Left Section: Details */}
                      <div className='flex-1 pr-4'>
                        {/* START BEST SELLER BADGE  */}

                        {(item.card.info.hasBestsellerItems ||
                          item.card.info.isBestseller) && (
                          <div className='relative bottom-1 text-xl text-orange-500 right-1 font-bold mx-auto py-1 wx-2 flex items-center gap-1'>
                            <FaMedal className='text-3xl' /> Best Seller
                          </div>
                        )}
                        {/* END BEST SELLER BADGE */}
                        <h3 className='text-xl font-semibold text-gray-800 dark:text-white group-hover:text-orange-600 transition duration-300'>
                          {item.card.info.name}
                        </h3>
                        <p className='text-lg font-medium text-orange-500 mt-2'>
                          {`₹ ${
                            item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100
                          }`}
                        </p>
                        <p className='text-sm text-gray-500 dark:text-gray-300 mt-2 text-justify dark:group-hover:text-gray-100 group-hover:text-black transition duration-400'>
                          {item.card.info.description ||
                            "No description available."}
                        </p>
                      </div>

                      {/* Right Section: Image and Add to Cart */}
                      <div className='flex-shrink-0 w-36 h-36 relative'>
                        <img
                          src={
                            item?.card?.info?.imageId
                              ? `${RESTAURANT_MENU_IMG}${item.card.info.imageId}`
                              : "https://via.placeholder.com/200x150"
                          }
                          alt={item?.card?.info?.name}
                          className='w-full h-full object-cover rounded-[15px] border-2 border-orange-500 dark:border-orange-400'
                        />
                        <div className='bottom-7 relative left-0 w-6/12 mx-auto flex justify-center items-center p-2  rounded-b-md'>
                          {quantity === 0 ? (
                            <button
                              className='bg-orange-500 px-4 py-2 text-white font-medium text-sm rounded-md hover:bg-orange-600 transition duration-300 flex items-center gap-2'
                              onClick={() => handleAddToCart(item)}
                            >
                              <BsCart3 className='text-lg' />
                            </button>
                          ) : (
                            <div className='flex items-center gap-4'>
                              <button
                                className='bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition duration-300'
                                onClick={() =>
                                  dispatch(decreaseQuantity(item.card.info.id))
                                }
                              >
                                <FaMinus className='text-lg' />
                              </button>
                              <span className='text-white font-semibold bg-gray-800 px-3 py-1 rounded-md'>
                                {quantity}
                              </span>
                              <button
                                className='bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition duration-300'
                                onClick={() =>
                                  dispatch(increaseQuantity(item.card.info.id))
                                }
                              >
                                <FaPlus className='text-lg' />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RestaurantCategory;
