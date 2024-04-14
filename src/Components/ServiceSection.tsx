import { ServiceCard } from "./ServiceCards";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ServiceCard
            title="Desenvolvimento Frontend"
            description="Criação de interfaces web modernas, responsivas e otimizadas para todos os dispositivos e plataformas."
          />
          <ServiceCard
            title="Estratégias de Automação"
            description="Maximize sua presença online com estratégias de automação personalizadas para WhatsApp e Instagram."
          />
          <ServiceCard
            title="Consultoria"
            description="Oferecemos consultoria especializada para ajudar sua empresa a crescer e se destacar no mercado digital."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
