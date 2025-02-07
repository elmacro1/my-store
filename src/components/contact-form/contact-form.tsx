import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

import Button from "../button/button";
import InputComponent from "../common/input/input";
import styles from "./contact-form.module.css";

const senderEmail = process.env.EMAIL;
const senderEmailPassword = process.env.EMAIL_PASSWORD;

interface Props {
  success: boolean;
  error: boolean;
}

const ContactForm = ({ success, error }: Props) => {
  const handleAction = async (formData: FormData) => {
    "use server";

    const name = formData.get("name")!.toString();
    const email = formData.get("email")!.toString();
    const phone = formData.get("phone")!.toString();
    const message = formData.get("message")!.toString();

    if (!name && !email && !phone && !message) return;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderEmailPassword,
      },
    });

    try {
      await transporter.sendMail({
        from: senderEmail,
        to: "om.modaunica@gmail.com",
        subject: "Página web - Formulario de contacto",
        html: `<h2>Hola! mi nombre es: ${name}</h2>
               <p>Este es mi mail: ${email}</p>
               <p>Mi número de teléfono: ${phone}</p>
               <p>Me comunico desde la página web.</p>
               <p>Y este es mi mensaje: <strong>${message}</strong></p>
        `,
      });
    } catch (error) {
      console.log("An error when sending mail: ", error);
      redirect("/contacto?error=true");
    }

    redirect("/contacto?success=true");
  };

  return (
    <form className={styles.main_container} action={handleAction}>
      {success && (
        <p className={styles.success_flag}>
          ¡Gracias por contactarnos! A la brevedad nos comunicamos con vos.
        </p>
      )}
      {error && (
        <p className={styles.error_flag}>
          ¡Ups! Intentalo de nuevo en unos minutos.
        </p>
      )}
      <div className={styles.input_container}>
        <p className={styles.input_title}>Nombre</p>
        <InputComponent
          customClass={styles.input_field}
          name="name"
          placeholder="Marco Galván"
          type="text"
          required={true}
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Mail</p>
        <InputComponent
          customClass={styles.input_field}
          name="email"
          placeholder="email@email.com"
          type="email"
          required={true}
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Teléfono</p>
        <InputComponent
          customClass={styles.input_field}
          name="phone"
          placeholder="3855123456"
          type="tel"
          required={true}
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.input_title}>Mensaje</p>{" "}
        <InputComponent
          customClass={styles.input_field}
          name="message"
          placeholder="Escribe un mensaje..."
          type="textarea"
          required={true}
        />
      </div>
      <Button label="Enviar" />
    </form>
  );
};

export default ContactForm;
