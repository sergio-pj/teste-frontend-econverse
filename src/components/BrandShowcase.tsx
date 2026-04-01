import { SectionTitle } from './SectionTitle';
import styles from './BrandShowcase.module.scss';

const brands = [1, 2, 3, 4, 5];

export const BrandShowcase = () => {
  return (
    <section className={styles.section} aria-labelledby="brands-title">
      <SectionTitle title="Navegue por marcas" titleId="brands-title" />
      <div className={styles.grid}>
        {brands.map((brand) => (
          <article key={brand} className={styles.badge}>
            <span className={styles.logo}>
              <span className={styles.logoAccent}>ec</span>
              <span className={styles.logoText}>onverse</span>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};
