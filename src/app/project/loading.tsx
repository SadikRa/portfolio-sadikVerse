const Loading = () => {
  return (
    <div className="flex flex-col space-y-5">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse p-5 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg"
        >
          {/* Thumbnail Skeleton */}
          <div className="w-full h-52 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>

          {/* Title Skeleton */}
          <div className="h-6 bg-gray-300 dark:bg-gray-600 w-3/4 mt-4 rounded"></div>

          {/* Content Skeleton */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 w-full mt-2 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 w-5/6 mt-2 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 w-2/3 mt-2 rounded"></div>

          {/* Button Skeleton */}
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 mt-4 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
