import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl font-heading text-3xl mb-4 font-medium text-white">
            Conheça a Arcof
          </h1>
          <p className="mb-8 leading-relaxed">
            Fundada em 2020, a Arcof nasceu com a missão de transformar o
            cenário digital, oferecendo soluções inovadoras. Nossa visão é ser
            referência no mercado, empoderando marcas a alcançarem seu máximo
            potencial online e offline.
          </p>
          <p className="mb-8 leading-relaxed">
            Com uma equipe de especialistas apaixonados por tecnologia e
            inovação, estamos comprometidos em entregar projetos excepcionais
            que superem as expectativas de nossos clientes. Valorizamos a
            transparência, excelência e a construção de relações duradouras.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="illustration a couple creating a chatbot | Image by vectorjuice on Freepick"
            src="about.svg"
            width={512}
            height={512}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
