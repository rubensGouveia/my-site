"use client";
import React, { ReactNode, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

// Esquema de validação do Yup
const InputC: (props: any) => ReactNode = (props: any) => {
  return <input {...props} />;
};
const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    tel: yup
      .string()
      .matches(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "O número de celular deve estar no formato (DD) XXXXX-XXXX ou (DD) XXXX-XXXX."
      )
      .required("O número de celular é obrigatório."),
    instagram: yup.string(),
    message: yup.string().required("Mensagem é obrigatória"),
  })
  .required();

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const phoneValue = watch("tel");

  const normalizePhoneNumber = (value: String | undefined) => {
    if (!value) return "";

    return value
      .replace(/[\D]/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)/, "$1");
  };

  useEffect(() => {
    setValue("tel", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios.post("https://webhook.n8n.rubensgouveia.com.br/webhook/form", data);

    alert("Mensagem enviada! Entraremos em contato em breve.");
    reset();
  };

  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container flex flex-col px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="title-font sm:text-4xl font-heading text-2xl font-medium title-font mb-4 text-white">
            Contato
          </h1>
          <p className="lg:w-2/3 mx-auto font-sans leading-relaxed text-base">
            Tem alguma dúvida ou quer saber mais sobre nossos serviços? Entre em
            contato conosco.
          </p>
        </div>
        <div className="lg:flex-grow md:w0/3 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap -m-2"
          >
            <div className="p-2 w-full sm:w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 font-sans">
              <input
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Nome"
                {...register("name")}
              />
              <p className="text-red-500 text-xs italic">
                {errors.name?.message}
              </p>
            </div>
            <div className="p-2 w-full sm:w-full  md:w-1/2 lg:w-1/2 xl:w-1/2">
              <input
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="E-mail"
                {...register("email")}
              />
              <p className="text-red-500 text-xs italic">
                {errors.email?.message}
              </p>
            </div>
            <div className="p-2  w-full sm:w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 font-sans">
              <input
                type="text"
                placeholder="Whatsapp"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("tel")}
              />

              <p className="text-red-500 text-xs italic">
                {errors.tel?.message}
              </p>
            </div>
            <div className="p-2  w-full sm:w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 ">
              <input
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Instagram"
                {...register("instagram")}
              />
              <p className="text-red-500 text-xs italic">
                {errors.instagram?.message}
              </p>
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 h-48 text-base outline-none text-gray-100 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Mensagem"
                {...register("message")}
              ></textarea>
              <p className="text-red-500 text-xs italic">
                {errors.message?.message}
              </p>
            </div>
            <div className="p-2 w-full">
              <button
                className="font-heading flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
          <div className="text-center mt-12">
            <h2 className="text-white text-lg font-heading">
              Outras formas de contato
            </h2>
            <p className="mt-2">
              <a
                href="https://wa.me/5561996824771"
                target="_blank"
                className="text-indigo-400"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                Telefone: 61 99682-4771
              </a>
            </p>
            <p>
              <a
                href="mailto:contato@arcof.com.br"
                target="_blank"
                className="text-indigo-400"
                aria-label="Entrar em contato por e-mail"
              >
                E-mail: contato@arcof.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
