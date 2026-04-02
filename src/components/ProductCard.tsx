import type { Product } from '../types/product';
import { formatPrice } from '../services/api';
import { resolveProductPhoto } from '../services/productImage';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const buildInstallmentText = (price: number): string => {
  const installment = price / 10;
  return `ou 10x de ${formatPrice(installment)} sem juros`;
};

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const previousPrice = product.price * 1.18;
  const photoSrc = resolveProductPhoto(product.productName, product.photo);

  return (
    <article className={styles.card}>
      <button type="button" className={styles.content} onClick={() => onSelect(product)}>
        <div className={styles.imageWrap}>
          <img src={photoSrc} alt={product.productName} loading="lazy" />
        </div>

        <div className={styles.info}>
          <h3>{product.productName}</h3>
          <p>{product.description}</p>
          <span className={styles.previousPrice}>{formatPrice(previousPrice)}</span>
          <strong className={styles.currentPrice}>{formatPrice(product.price)}</strong>
          <span className={styles.installment}>{buildInstallmentText(product.price)}</span>
          <span className={styles.shipping}>Frete gratis</span>
        </div>
      </button>

      <button type="button" className={styles.buyButton} onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  );
};
