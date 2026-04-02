import bannerParceiros from '../assets/banner-parceiros.svg';
import styles from './PartnerBanners.module.scss';

interface PartnerBannersProps {
  sectionId?: string;
}

const banners = [1, 2];

export const PartnerBanners = ({ sectionId }: PartnerBannersProps) => {
  return (
    <section id={sectionId} className={styles.section} aria-label="Banners de parceiros">
      <div className={styles.grid}>
        {banners.map((banner) => (
          <article key={banner} className={styles.banner}>
            <img className={styles.image} src={bannerParceiros} alt="" aria-hidden="true" />
            <div className={styles.content}>
              <span className={styles.tag}>Parceiros</span>
              <h2>Confira os nossos parceiros</h2>
              <p>Na Econverse, grandes resultados nascem de parcerias que impulsionam grandes inovacões.</p>
              <a href="#newsletter">Confira</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
