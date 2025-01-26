const ShimmerCard = () => {
  return (
    <div className='shimmer-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse'>
      {/* Image Placeholder */}
      <div className='shimmer-image bg-gray-300 dark:bg-gray-700 h-40 w-full rounded-md mb-4'></div>

      {/* Title Placeholder */}
      <div className='shimmer-title bg-gray-300 dark:bg-gray-700 h-6 w-3/4 rounded-md mb-2'></div>

      {/* Text Placeholder */}
      <div className='shimmer-text bg-gray-300 dark:bg-gray-700 h-4 w-1/2 rounded-md mb-2'></div>

      {/* Small Text Placeholder */}
      <div className='shimmer-text bg-gray-300 dark:bg-gray-700 h-4 w-1/3 rounded-md'></div>
    </div>
  );
};

export default function Shimmer() {
  return (
    <div className='shimmer-container p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {Array(20)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
}
