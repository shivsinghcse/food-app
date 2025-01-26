import React from "react";
import {useRouteError} from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log("Error", error);
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full text-center'>
        <h1 className='text-4xl font-bold text-red-600 mb-4'>
          Error {error.status}
        </h1>
        <h2 className='text-2xl text-gray-800 dark:text-white mb-4'>
          Oops! Something went wrong
        </h2>
        <h4 className='text-lg text-gray-600 dark:text-gray-300'>
          {error.statusText || error.message}
        </h4>
      </div>
    </div>
  );
}
