import styles from "./Texto.module.css";

const Texto = ({ backgroundColor, color }) => {
  return (
    <section className={styles.texto} style={backgroundColor}>
      <p className={styles.paragrafo} style={color}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quidem
        ipsum error ea dignissimos nesciunt consequuntur expedita, numquam modi
        sunt repellat quia in, at, voluptate ipsa dolor perferendis aperiam
        impedit nam placeat! Voluptatum error saepe quidem illo possimus
        exercitationem et perferendis accusamus, sed accusantium vel eum officia
        tempore sapiente, ut consequatur similique eaque obcaecati? Laboriosam
        minima praesentium voluptates aliquam fugit. Eaque iusto atque,
        laboriosam quas, repudiandae a, perspiciatis est perferendis ipsum amet
        excepturi cumque dolorum necessitatibus? Voluptate, temporibus! Iure,
        saepe."
      </p>

      <p className={styles.paragrafo} style={color}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolor
        numquam porro labore aliquam maxime quibusdam, quaerat totam, quos
        officia consectetur magni aperiam sit ex laboriosam iure ab nihil eius
        voluptas assumenda ipsam blanditiis dignissimos dolore. Tempore quae
        commodi odit!"
      </p>
    </section>
  );
};

export default Texto;
