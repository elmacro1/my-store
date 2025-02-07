import Button from "../button/button";
import InputComponent from "../common/input/input";
import styles from "./contact-form.module.css";

const ContactForm = () => {
  const handleAction = async () => {
    "use server";
    console.log("holis");
  };
  return (
    <form className={styles.main_container} action={handleAction}>
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
