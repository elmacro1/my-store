import ContactForm from "@/components/contact-form/contact-form";
import ContactDetails from "@/components/contact-details/contact-details";
import styles from "./page.module.css";

const ContactoPage = () => (
  <main className={styles.main_container}>
    <div className={styles.content_container}>
      <ContactDetails />
      <ContactForm />
    </div>
  </main>
);

export default ContactoPage;
