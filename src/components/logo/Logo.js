import cogumelo from "../../images/cogumelo-vermelho.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="index.js" className={styles.logo}>
      <img src={cogumelo} alt="logo" />
    </a>
  );
};

export default Logo;
