import Menu from "../nav/Nav";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Menu />
      <address className={styles.endereco}>
        Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200
      </address>
    </footer>
  );
};

export default Footer;
