import bannerPrincipal from '../assets/banner-principal.svg';
import styles from './HeroBanner.module.scss';

export const HeroBanner = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <img className={styles.backgroundImage} src={bannerPrincipal} alt="" aria-hidden="true" />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Venha conhecer nossas promoções</h1>
          <p className={styles.highlight}>
            <strong>50% Off</strong> nos produtos
          </p>
          <a href="#produtos" className={styles.button}>
            Ver produto
          </a>
        </div>
      </div>
    </section>
  );
};
