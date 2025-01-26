import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../Rduex/cartSlice"; // Import actions
import {FiTrash2} from "react-icons/fi"; // Trash icon
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"; // Minus and Plus icons
import {BsCartCheck} from "react-icons/bs"; // Checkout icon
import {GiShoppingCart} from "react-icons/gi"; // Empty cart icon
import {Link} from "react-router-dom";

const Cart = () => {
  const {items, totalQuantity, totalPrice} = useSelector((state) => state.cart); // Get cart state
  const dispatch = useDispatch();

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-500 flex items-center justify-center py-10'>
      <div className='bg-white dark:bg-gray-700 p-8 border-2 border-orange-500 dark:border-gray-600 rounded-lg shadow-lg w-full max-w-4xl -translate-y-1/4 mx-1/2'>
        <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8 flex items-center justify-center'>
          <GiShoppingCart className='text-3xl text-orange-500 mr-2' />
          Your Food Cart
        </h1>

        {/* Cart Items */}
        <div
          className={`space-y-6 ${
            items.length > 3 ? "max-h-96 overflow-y-auto" : ""
          }`}
        >
          {items.length === 0 ? (
            <Link to='/' className='flex items-center justify-center'>
              <p className='text-center text-lg text-gray-500 dark:text-gray-400 flex items-center justify-center'>
                <GiShoppingCart className='text-4xl text-gray-300 dark:text-gray-500 mr-2' />
                Your cart is empty, shop now 😋.
              </p>
            </Link>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between bg-gray-50 dark:bg-gray-600 p-4 rounded-lg shadow-md'
              >
                <div className='flex items-center'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-16 h-16 object-cover rounded-md mr-4'
                  />
                  <div>
                    <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
                      {item.name}
                    </h2>
                    <p className='text-sm text-gray-500 dark:text-gray-300'>
                      ₹{item.price}
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <button
                    className='text-orange-500 hover:text-orange-600 transition duration-300 text-2xl'
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <AiOutlineMinusCircle />
                  </button>
                  <span className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                    {item.quantity}
                  </span>
                  <button
                    className='text-orange-500 hover:text-orange-600 transition duration-300 text-2xl'
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <AiOutlinePlusCircle />
                  </button>
                  <button
                    className='text-red-600 hover:text-red-800 transition duration-300 text-2xl'
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total Price Section */}
        <div className='mt-8 flex items-center justify-between border-t pt-6'>
          <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
            Total
          </h2>
          <span className='text-2xl font-bold text-gray-900 dark:text-gray-200'>
            ₹{totalPrice.toFixed(2)}
          </span>
        </div>

        {/* Checkout Button */}
        {items.length > 0 && (
          <button className='mt-6 w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center'>
            <BsCartCheck className='text-2xl mr-2' />
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
