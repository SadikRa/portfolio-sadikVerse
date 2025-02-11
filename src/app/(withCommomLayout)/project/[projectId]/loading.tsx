import React from "react";

const Loading = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10">
      <div className="animate-pulse">
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        <div className="mt-8 h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default Loading;
