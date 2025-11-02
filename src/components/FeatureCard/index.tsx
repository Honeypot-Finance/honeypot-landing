import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
}: FeatureCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-[32px] p-6 flex flex-col items-center justify-between hover:border-[#FFCD4D] transition-all duration-300 cursor-pointer group relative hover:scale-105 hover:shadow-2xl"
      style={{
        background: '#1F1609',
        border: '6px solid #FFA9311A',
      }}
    >
      {/* Arrow icon in top right */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-[#3a2f1a] rounded-full flex items-center justify-center group-hover:bg-[#FFCD4D] transition-all duration-300">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:scale-110 transition-transform duration-300"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-black"
          />
        </svg>
      </div>

      {/* Large centered image */}
      <div className="w-36 h-36 mb-6 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={150}
          className="object-contain max-w-full max-h-full"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-poppins font-bold text-white mb-2 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-center text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
