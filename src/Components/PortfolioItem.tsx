interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={imageUrl}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {title}
          </h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
