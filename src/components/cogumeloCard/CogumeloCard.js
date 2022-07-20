import cogumelo from "../../images/cogumelo-vermelho.png";
import styles from "./CogumeloCard.module.css";

const CogumeloCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={cogumelo} alt="cogumelo" />
      <small>Cogumelo {props.numero}</small>
    </div>
  );
};

export default CogumeloCard;
