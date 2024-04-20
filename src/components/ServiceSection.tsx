import { ServiceCard } from "./ServiceCards";

const FrontendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={20}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const AutomationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={20}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

const ConsultingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={20}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    />
  </svg>
);
const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Na Arcof, oferecemos uma ampla gama de serviços para atender às
            necessidades do seu negócio. Desde desenvolvimento frontend até
            estratégias de automação e consultoria especializada, estamos
            prontos para ajudar sua empresa a alcançar o sucesso online.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <ServiceCard
            title="Desenvolvimento Web"
            description="Criamos interfaces web modernas, responsivas e de alta performance, utilizando as mais recentes tecnologias e frameworks do mercado. Nosso objetivo é proporcionar a melhor experiência do usuário e aumentar a conversão do seu site."
            icon={<FrontendIcon />}
            ctaText="Solicite seu site"
            ctaLink="#contact"
          />
          <ServiceCard
            title="Estratégias de Automação"
            description="Automatize sua presença online com nossas soluções personalizadas para WhatsApp e Instagram. Aumente o engajamento, melhore o atendimento ao cliente e impulsione suas vendas com chatbots inteligentes e campanhas automatizadas."
            icon={<AutomationIcon />}
            ctaText="Conheça Mais"
            ctaLink="#automation"
          />
          <ServiceCard
            title="Consultoria"
            description="Nossa equipe de especialistas está pronta para fornecer consultoria estratégica para o seu negócio digital. Analisamos seu mercado, identificamos oportunidades e desenvolvemos planos de ação personalizados para impulsionar seu crescimento online."
            icon={<ConsultingIcon />}
            ctaText="Agende uma Consultoria"
            ctaLink="#contact"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
