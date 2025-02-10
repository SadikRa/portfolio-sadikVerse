const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse p-5 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          {/* Thumbnail Skeleton */}
          <div className="w-full h-60 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

          {/* Title Skeleton */}
          <div className="h-6 bg-gray-400 dark:bg-gray-600 w-3/4 mt-4 rounded"></div>

          {/* Content Skeleton */}
          <div className="h-4 bg-gray-400 dark:bg-gray-600 w-full mt-2 rounded"></div>
          <div className="h-4 bg-gray-400 dark:bg-gray-600 w-5/6 mt-2 rounded"></div>
          <div className="h-4 bg-gray-400 dark:bg-gray-600 w-2/3 mt-2 rounded"></div>

          {/* Technologies Skeleton */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[...Array(3)].map((_, techIndex) => (
              <div
                key={techIndex}
                className="h-5 w-16 bg-gray-400 dark:bg-gray-600 rounded"
              ></div>
            ))}
          </div>

          {/* Live Demo Button Skeleton */}
          <div className="h-10 w-32 bg-gray-400 dark:bg-gray-600 mt-4 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
