import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="text-white bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-heading sm:text-4xl text-3xl mb-4 font-medium text-white">
            Inovação e Tecnologia
            <br className="hidden lg:inline-block" />
            para o seu Negócio
          </h1>
          <p className="mb-8 font-sans leading-relaxed">
            A Arcof oferece soluções avançadas em desenvolvimento frontend,
            estratégias de automação em redes sociais e consultoria
            especializada para elevar a sua empresa ao próximo nível.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="font-heading flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              aria-label="ir para o formulário de contato"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="illustration of a chatbot doing automation | Image by vectorjuice on Freepick"
            src="hero.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
