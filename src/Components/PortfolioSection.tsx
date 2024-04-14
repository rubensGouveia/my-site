import { PortfolioItem } from "./PortfolioItem";

const PortfolioSection: React.FC = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <PortfolioItem
            title="Projeto 1"
            description="Descrição breve do projeto 1."
            imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <PortfolioItem
            title="Projeto 2"
            description="Descrição breve do projeto 2."
            imageUrl="https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <PortfolioItem
            title="Projeto 3"
            description="Descrição breve do projeto 3."
            imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          {/* Adicione mais PortfolioItem conforme necessário */}
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;
