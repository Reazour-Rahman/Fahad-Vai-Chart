import React from 'react';
import { useState } from 'react';

const ToggleSideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
    <div className="flex items-center cursor-pointer  inline-block sm:hidden mb-3  bg-red-500">
    {showSidebar ? (
    <button
    className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className="flex  items-center cursor-pointer ml-4 my-3 block sm:hidden "
      fill="#2563EB"
      viewBox="0 0 100 80"
      width="30"
      height="30"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  )}

    <div
      className={`top-0 left-0  bg-blue-600  p-10  text-white fixed h-full z-40  ease-in-out duration-300 ${
        showSidebar ? "-translate-x-0 " : "-translate-x-full"
      }`}
    >
      <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
    </div>
        </div>
    );
};

export default ToggleSideBar;