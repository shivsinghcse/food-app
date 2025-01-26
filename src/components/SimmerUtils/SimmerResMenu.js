import React from "react";

function SimmerResMenu() {
  return (
    <div className='p-6' data-testid='simmerResMenu'>
      {/* Restaurant Details Shimmer */}
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-8 border-t-4 border-orange-500 animate-pulse'>
        {/* Restaurant Name */}
        <div className='shimmer-text large bg-gray-300 dark:bg-gray-700 h-8 w-3/4 rounded-md mb-4'></div>
        {/* Restaurant Location */}
        <div className='shimmer-text medium bg-gray-300 dark:bg-gray-700 h-6 w-1/2 rounded-md mb-2'></div>
        {/* Cuisines */}
        <div className='shimmer-text medium bg-gray-300 dark:bg-gray-700 h-6 w-2/3 rounded-md mb-3'></div>
        {/* Cost for Two */}
        <div className='shimmer-text small bg-gray-300 dark:bg-gray-700 h-6 w-1/3 rounded-md mb-4'></div>
        {/* Rating */}
        <div className='shimmer-text small bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded-md mb-2'></div>
      </div>

      {/* Menu Section Shimmer */}
      <div className='w-10/12 mx-auto mb-8 animate-pulse'>
        {/* Accordion Header Shimmer */}
        <div className='flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-800 font-semibold text-lg rounded-lg mb-4'>
          <div className='shimmer-text bg-gray-300 dark:bg-gray-700 h-6 w-1/3 rounded-md'></div>
          <div className='shimmer-icon bg-gray-300 dark:bg-gray-700 h-6 w-6 rounded-full'></div>
        </div>

        {/* Accordion Content Shimmer */}
        <div className='bg-white dark:bg-gray-900 p-4 rounded-lg'>
          <ul className='flex flex-col gap-6'>
            {Array(4) // Number of shimmer items
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className='flex flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 h-[200px] space-x-4'
                >
                  {/* Left Section: Details Shimmer */}
                  <div className='flex-1 pr-4 space-y-4'>
                    <div className='shimmer-badge bg-orange-200 h-6 w-1/4 rounded-md'></div>
                    <div className='shimmer-text bg-gray-300 dark:bg-gray-700 h-6 w-3/4 rounded-md'></div>
                    <div className='shimmer-price bg-orange-300 h-6 w-1/3 rounded-md'></div>
                    <div className='shimmer-description bg-gray-300 dark:bg-gray-700 h-4 w-full rounded-md'></div>
                  </div>

                  {/* Right Section: Image and Add to Cart Shimmer */}
                  <div className='flex-shrink-0 w-36 h-36 relative'>
                    <div className='shimmer-image bg-gray-300 dark:bg-gray-700 h-full w-full rounded-md'></div>
                    <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 shimmer-cart bg-orange-200 h-8 w-8 rounded-full'></div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SimmerResMenu;
