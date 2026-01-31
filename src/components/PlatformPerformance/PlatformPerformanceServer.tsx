const stats = [
  { value: "$90.0M+", label: "Total Volume" },
  { value: "53.5K+", label: "Active Users" },
  { value: "1.9M+", label: "Trades Executed" },
];

const gradientStyle = {
  backgroundImage: "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

export default function PlatformPerformanceServer() {
  return (
    <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto">
      <div className="p-8 sm:p-12">
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins leading-tight">
            Battle tested
            <br />
            infrastructure
          </h2>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  style={gradientStyle}
                >
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-400">
                  Honeypot Finance has facilitated millions of dollars of
                  transaction volume
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
