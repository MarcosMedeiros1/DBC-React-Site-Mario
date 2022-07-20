import CogumeloCard from "../cogumeloCard/CogumeloCard";
import styles from "./Cogumelos.module.css";

const Cogumelos = () => {
  return (
    <section>
      <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
      <div>
        <CogumeloCard numero={1} />
        <CogumeloCard numero={2} />
        <CogumeloCard numero={3} />
      </div>
    </section>
  );
};

export default Cogumelos;
