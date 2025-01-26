import React from "react";

import UserClass from "./UserClass";

function About() {
  return (
    <div className='min-h-screen bg-gray-100  dark:text-gray-200 p-5  dark:bg-gray-500'>
      {/* Main Heading */}
      <h4 className='text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
        About
      </h4>

      {/* Subheading */}
      <h4 className='text-2xl text-gray-600 dark:text-gray-300 mb-8'>
        This is the about page of{" "}
        <span className='font-semibold text-orange-600 dark:text-orange-400'>
          Namaste React
        </span>
      </h4>

      {/* UserClass Components */}
      <div className='space-y-4'>
        <div className='p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
          <UserClass name={"Ashutosh26121999"} />
        </div>
      </div>
    </div>
  );
}

export default About;
