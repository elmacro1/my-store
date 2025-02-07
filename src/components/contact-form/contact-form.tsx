import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

import EmailTemplate from "../email-template/email-template";
import Button from "../button/button";
import InputComponent from "../common/input/input";
import styles from "./contact-form.module.css";

interface Props {
  success: boolean;
}

const ContactForm = ({ success }: Props) => {
  const handleAction = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    console.log({ name, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tu-email@gmail.com", // Tu dirección de correo
        pass: "tu-contraseña-o-contraseña-de-aplicación", // IMPORTANTE: Usa una contraseña de aplicación
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: "tu-email@gmail.com",
      to: "destinatario@example.com",
      subject: "¡Hola desde Node.js!",
      text: "Este es un correo enviado con Nodemailer y Gmail.",
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo:", error);
      } else {
        console.log("Correo enviado:", info.response);
      }
    });
    redirect("/contacto?success=true");
  };

  return (
    <form className={styles.main_container} action={handleAction}>
      <p className={styles.success_flag}>
        ¡Gracias por contactarnos! A la brevedad nos comunicamos con vos.
      </p>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Nombre</p>
        <InputComponent
          customClass={styles.input_field}
          name="name"
          placeholder="Marco Galván"
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Mail</p>
        <InputComponent
          customClass={styles.input_field}
          name="email"
          placeholder="email@email.com"
          type="email"
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Teléfono</p>
        <InputComponent
          customClass={styles.input_field}
          name="phone"
          placeholder="3855123456"
          type="tel"
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Mensaje</p>{" "}
        <InputComponent
          customClass={styles.input_field}
          name="message"
          placeholder="Escribe un mensaje..."
          type="textarea"
        />
      </div>
      <Button label="Enviar" />
    </form>
  );
};

export default ContactForm;
