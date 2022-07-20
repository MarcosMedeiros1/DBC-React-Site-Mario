import styles from "./Mapa.module.css";
const Mapa = () => {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15190.662801477196!2d-41.511276699999996!3d-17.854299599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1658278327450!5m2!1spt-BR!2sbr";
  return (
    <section>
      <h2>Endereço da DBC</h2>
      <iframe
        className={styles.mapa}
        title="mapa"
        src={src}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Mapa;
