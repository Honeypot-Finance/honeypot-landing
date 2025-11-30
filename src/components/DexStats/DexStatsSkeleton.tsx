export function DexStatsSkeleton() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[700px] mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white/20 animate-pulse"
          >
            <div className="h-4 bg-gray-700 rounded w-16 mx-auto mb-2" />
            <div className="h-8 bg-gray-600 rounded w-24 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
