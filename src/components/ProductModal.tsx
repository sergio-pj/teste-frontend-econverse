import celularVitrine from '../assets/celular-vitrine.svg';
import { useEffect, useState } from 'react';
import { formatPrice } from '../services/api';
import type { Product } from '../types/product';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!isOpen || !product) {
    return null;
  }

  const previousPrice = product.price * 1.18;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} role="presentation" onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
          <span aria-hidden="true">×</span>
        </button>

        <div className={styles.media}>
          <img src={celularVitrine} alt={product.productName} loading="lazy" />
        </div>

        <div className={styles.content}>
          <h2 id="product-modal-title">{product.productName}</h2>
          <span className={styles.previousPrice}>{formatPrice(previousPrice)}</span>
          <strong>{formatPrice(product.price)}</strong>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.paymentNote}>Many desktop publishing packages and web page editors now use</p>
          <a href="#produtos">Veja mais detalhes do produto</a>

          <div className={styles.purchaseRow}>
            <div className={styles.quantityControl} aria-label="Controle de quantidade">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>
                −
              </button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)}>
                +
              </button>
            </div>
            <button type="button" className={styles.buyButton}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
