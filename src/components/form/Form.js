import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles.formSection}>
      <h1>Contato</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <div>
            <label htmlFor="nome">Digite seu nome completo:</label>
            <input type="text" placeholder="Digite seu nome completo" />
          </div>

          <div>
            <label htmlFor="email">Digite seu email:</label>
            <input type="email" placeholder="Digite seu email" />
          </div>

          <div>
            <label htmlFor="motivo">Selecione o motivo do contato</label>
            <select name="motivo">
              <option value="Problema no site">Problema no site</option>
              <option value="Problema no app">Problema no app</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensagem">Sua mensagem</label>
            <textarea
              name="mensagem"
              placeholder="Digite sua mensagem"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button>Salvar</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
