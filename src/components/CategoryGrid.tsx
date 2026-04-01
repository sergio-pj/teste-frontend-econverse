import bebidasIcon from '../assets/Bebidas.svg';
import esporteFitnessIcon from '../assets/Esporte&Fitness.svg';
import ferramentasIcon from '../assets/Ferramentas.svg';
import modaIcon from '../assets/Moda.svg';
import saudeIcon from '../assets/Saúde.svg';
import supermercadoIcon from '../assets/Supermercado.svg';
import tecnologiaIcon from '../assets/Tecnologia.svg';
import styles from './CategoryGrid.module.scss';

const categories = [
  { icon: tecnologiaIcon, label: 'Tecnologia', featured: true },
  { icon: supermercadoIcon, label: 'Supermercado' },
  { icon: bebidasIcon, label: 'Bebidas' },
  { icon: ferramentasIcon, label: 'Ferramentas' },
  { icon: saudeIcon, label: 'Saúde' },
  { icon: esporteFitnessIcon, label: 'Esportes e Fitness' },
  { icon: modaIcon, label: 'Moda' },
];

export const CategoryGrid = () => {
  return (
    <section className={styles.categories} aria-label="Categorias em destaque">
      <div className={styles.grid}>
        {categories.map((category) => (
          <article
            key={category.label}
            className={`${styles.card} ${category.featured ? styles.featured : ''}`.trim()}
          >
            <span className={styles.icon} aria-hidden="true">
              <img src={category.icon} alt="" loading="lazy" />
            </span>
            <h2>{category.label}</h2>
          </article>
        ))}
      </div>
    </section>
  );
};
