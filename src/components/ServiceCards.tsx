import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  ctaText: string;
  ctaLink: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-white text-lg font-medium">{title}</h3>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base mb-6">{description}</p>
          <Link
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
            href={ctaLink}
          >
            {ctaText}
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
