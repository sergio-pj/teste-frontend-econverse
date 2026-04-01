import { BrandShowcase } from '../components/BrandShowcase';
import { CategoryGrid } from '../components/CategoryGrid';
import { HeroBanner } from '../components/HeroBanner';
import { Newsletter } from '../components/Newsletter';
import { PartnerBanners } from '../components/PartnerBanners';
import { ProductList } from '../components/ProductList';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main className={styles.main}>
        <HeroBanner />
        <CategoryGrid />
        <ProductList
          sectionId="produtos"
          title="Produtos relacionados"
          subtitle="Ver todos"
          showTabs
          maxItems={4}
        />
        <PartnerBanners sectionId="parceiros-1" />
        <ProductList
          sectionId="produtos-secundarios"
          title="Produtos relacionados"
          subtitle="Ver todos"
          showTabs={false}
          maxItems={4}
        />
        <PartnerBanners sectionId="parceiros-2" />
        <BrandShowcase />
        <ProductList
          sectionId="mais-vendidos"
          title="Produtos relacionados"
          subtitle="Ver todos"
          showTabs={false}
          maxItems={4}
        />
      </main>
      <Newsletter />
      <SiteFooter />
    </div>
  );
};
