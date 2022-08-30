import { useRef } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { FiSend } from "react-icons/fi";

import useForm from "../hooks/useForm";
import Button from "./layout/Button";

const SendEmail = () => {
  const refForm = useRef();
  const [formValues, handleChangeValues] = useForm({
    from_name: "",
    email_id: "",
    message: "",
  });

  const serviceId = "service_6vlr4xm";
  const templateId = "template_8qsy0ok";
  const idEmailJs = "Zz0X-xgpxN5rS44Xx";

  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .send(serviceId, templateId, formValues, idEmailJs)
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Gracias por escribirme ❤️",
          showConfirmButton: false,
          timer: 1500,
          background: "#1e293b",
          color: "#d1d5db",
        })
      )
      .catch((e) => console.log(e));
  };

  return (
    <form
      className="w-full px-6 py-4 rounded-lg bg-slate-800 mt-14 md:mt-0"
      ref={refForm}
      onSubmit={handleSendMessage}
    >
      <h3 className="text-2xl font-black text-center text-sky-400">
        Enviame un Mensajito ❤️
      </h3>
      <div className="">
        <input
          type="text"
          name="from_name"
          onChange={handleChangeValues}
          className="w-full px-4 py-3 mt-5 text-lg font-bold bg-transparent border border-gray-300 rounded-lg border-opacity-20 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          placeholder="Como te llamas?"
        />
        <input
          type="email"
          name="email_id"
          onChange={handleChangeValues}
          className="w-full px-4 py-3 mt-3 text-lg font-bold bg-transparent border border-gray-300 rounded-lg border-opacity-20 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          placeholder="Tu Correo Electronico"
        />
        <textarea
          name="message"
          onChange={handleChangeValues}
          className="w-full px-4 py-3 mt-3 text-lg font-bold bg-transparent border border-gray-300 rounded-lg resize-none border-opacity-20 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          rows={2}
          placeholder="El Mensajito 🤞"
        ></textarea>
        <div className="flex justify-end mt-5">
          <Button text="Enviar" icon={<FiSend size={20} />} />
        </div>
      </div>
    </form>
  );
};

export default SendEmail;
