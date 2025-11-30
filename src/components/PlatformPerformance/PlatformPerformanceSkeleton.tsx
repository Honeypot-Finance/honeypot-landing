export function PlatformPerformanceSkeleton() {
  return (
    <div className="w-full max-w-[1200px] mx-4 sm:mx-auto">
      <div className="p-8 sm:p-12">
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Live Data Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm sm:text-base font-medium">
              Loading...
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins leading-tight">
            Battle tested
            <br />
            infrastructure
          </h2>

          {/* Metrics Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-12 bg-gradient-to-r from-amber-800/30 to-orange-800/30 rounded w-32 mb-2" />
                <div className="h-6 bg-gray-700 rounded w-28 mb-1" />
                <div className="h-4 bg-gray-800 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
