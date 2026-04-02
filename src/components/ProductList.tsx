import { useEffect, useState } from 'react';
import setaDireita from '../assets/Seta direita.svg';
import setaEsquerda from '../assets/Seta esquerda.svg';
import { getProducts } from '../services/api';
import { productsFallback } from '../services/productsFallback';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { SectionTitle } from './SectionTitle';
import styles from './ProductList.module.scss';

const tabs = ['Celular', 'Acessorios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

interface ProductListProps {
  sectionId?: string;
  title?: string;
  subtitle?: string;
  showTabs?: boolean;
  maxItems?: number;
}

export const ProductList = ({
  sectionId = 'produtos',
  title = 'Produtos relacionados',
  subtitle = 'Ver todos',
  showTabs = true,
  maxItems,
}: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>(productsFallback);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const items = await getProducts();
        setProducts(items.length > 0 ? items : productsFallback);
      } catch (loadError) {
        setProducts(productsFallback);
        setError(loadError instanceof Error ? loadError.message : null);
      } finally {
        setIsLoading(false);
      }
    };

    void loadProducts();
  }, []);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const visibleCount = typeof maxItems === 'number' ? maxItems : Math.min(4, products.length);
  const maxStartIndex = Math.max(0, products.length - visibleCount);

  useEffect(() => {
    setStartIndex(0);
  }, [products, visibleCount]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (products.length <= visibleCount) {
      return;
    }

    setStartIndex((current) => {
      if (direction === 'right') {
        return current >= maxStartIndex ? 0 : current + 1;
      }

      return current <= 0 ? maxStartIndex : current - 1;
    });
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section id={sectionId} className={styles.section} aria-labelledby={`${sectionId}-title`}>
      <div className={styles.sectionHeader}>
        <SectionTitle title={title} subtitle={subtitle} titleId={`${sectionId}-title`} />
      </div>

      {showTabs ? (
        <div className={styles.tabs} role="tablist" aria-label="Categorias de produto">
          {tabs.map((tab, index) => (
            <button key={tab} type="button" className={index === 0 ? styles.activeTab : ''}>
              {tab}
            </button>
          ))}
        </div>
      ) : null}

      {isLoading ? <div className={styles.feedback}>Carregando produtos...</div> : null}

      {!isLoading ? (
        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            aria-label={`Voltar produtos da secao ${title}`}
            onClick={() => scrollCarousel('left')}
          >
            <img src={setaEsquerda} alt="" loading="lazy" />
          </button>

          <div className={styles.viewport}>
            <div className={styles.grid}>
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onSelect={handleSelectProduct} />
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            aria-label={`Avancar produtos da secao ${title}`}
            onClick={() => scrollCarousel('right')}
          >
            <img src={setaDireita} alt="" loading="lazy" />
          </button>
        </div>
      ) : null}

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};
