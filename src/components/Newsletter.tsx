import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={styles.copy}>
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>Assine a nossa newsletter e receba as novidades e conteudos exclusivos da Econverse.</p>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Digite seu nome" aria-label="Digite seu nome" />
        <input type="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" />
        <button type="submit">Inscrever</button>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span>Aceito os termos e condicoes</span>
        </label>
      </form>
    </section>
  );
};
