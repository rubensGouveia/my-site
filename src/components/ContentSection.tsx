const ContentSection = () => {
  return (
    <section id="automation" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Automação e Gestão de Mensagens
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A Arcof oferece soluções de automação para WhatsApp e Instagram,
            permitindo uma comunicação eficiente e personalizada com seus
            clientes. Nossas ferramentas automatizam o atendimento, aumentam o
            engajamento e impulsionam as vendas.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Chatbots Inteligentes
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Desenvolvemos chatbots inteligentes para WhatsApp e Instagram,
                  capazes de entender as intenções dos usuários e fornecer
                  respostas precisas e personalizadas. Automatize o atendimento
                  ao cliente, suporte técnico e vendas com nossa tecnologia de
                  processamento de linguagem natural.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Gestão de Campanhas
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Gerencie campanhas de marketing e comunicação em escala com
                  nossas ferramentas de automação. Envie mensagens
                  personalizadas, segmente seu público-alvo e acompanhe os
                  resultados em tempo real. Aumente o engajamento, gere leads
                  qualificados e impulsione suas vendas.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Análise e Insights
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Obtenha insights valiosos sobre o desempenho de suas campanhas
                  de automação com nossos relatórios detalhados. Acompanhe
                  métricas-chave, como taxas de abertura, cliques e conversões,
                  e tome decisões baseadas em dados para otimizar suas
                  estratégias de comunicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
