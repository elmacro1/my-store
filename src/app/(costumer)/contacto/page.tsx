import ContactForm from "@/components/contact-form/contact-form";
import ContactDetails from "@/components/contact-details/contact-details";
import styles from "./page.module.css";

interface Props {
  searchParams: Promise<{
    success: boolean;
    error: boolean;
  }>;
}

const ContactoPage = async ({ searchParams }: Props) => {
  const { success, error } = await searchParams;

  return (
    <main className={styles.main_container}>
      <div className={styles.content_container}>
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.contact_info}>
          <ContactDetails />
          <ContactForm success={success} error={error} />
        </div>
      </div>
    </main>
  );
};

export default ContactoPage;
