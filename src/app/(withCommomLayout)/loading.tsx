const Loading = () => {
  return (
    <div className="animate-pulse space-y-10">
      <div className="h-16 bg-gray-200 dark:bg-gray-800 w-full"></div>

      <div className="h-[400px] bg-gray-300 dark:bg-gray-700 w-full rounded-lg"></div>

      <div className="w-full max-w-5xl mx-auto px-6">
        <h2 className="h-8 bg-gray-400 dark:bg-gray-600 w-48 rounded"></h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-5">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-12 w-12 bg-gray-400 dark:bg-gray-600 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 space-y-8">
        <h2 className="h-8 bg-gray-400 dark:bg-gray-600 w-64 rounded"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="p-5 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="h-60 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-6 bg-gray-400 dark:bg-gray-600 w-3/4 mt-4 rounded"></div>
              <div className="h-4 bg-gray-400 dark:bg-gray-600 w-full mt-2 rounded"></div>
              <div className="h-4 bg-gray-400 dark:bg-gray-600 w-5/6 mt-2 rounded"></div>
              <div className="h-10 w-32 bg-gray-400 dark:bg-gray-600 mt-4 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-32 bg-gray-200 dark:bg-gray-800 w-full"></div>
    </div>
  );
};

export default Loading;
