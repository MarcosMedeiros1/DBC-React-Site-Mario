import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="../../App.js">Home</a>
        </li>
        <li>
          <a href="../../Sobre.js">Sobre</a>
        </li>
        <li>
          <a href="../../Contato.js">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
