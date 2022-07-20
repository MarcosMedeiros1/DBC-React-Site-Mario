import Logo from "../logo/Logo";
import Menu from "../nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <small>Melhores alunos do Vemser de todos os tempos</small>
      <Menu />
    </header>
  );
};

export default Header;
