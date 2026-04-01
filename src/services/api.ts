import { productsFallback } from './productsFallback';
import type { ApiProduct, Product } from '../types/product';

const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

let productsCache: Product[] | null = null;
let productsRequest: Promise<Product[]> | null = null;

interface ProductsApiResponse {
  success: boolean;
  products: ApiProduct[];
}

const normalizeProduct = (product: ApiProduct, index: number): Product => ({
  id: index + 1,
  productName: product.productName.trim(),
  description: (product.descriptionShort ?? product.productName).trim(),
  photo: product.photo.trim(),
  price: product.price,
});

export const getProducts = async (): Promise<Product[]> => {
  if (productsCache) {
    return productsCache;
  }

  if (productsRequest) {
    return productsRequest;
  }

  productsRequest = (async () => {
    try {
      const response = await fetch(PRODUCTS_URL);

      if (!response.ok) {
        throw new Error('Nao foi possivel carregar os produtos.');
      }

      const data = (await response.json()) as ProductsApiResponse;

      if (!data.success || !Array.isArray(data.products)) {
        throw new Error('A resposta da API veio em um formato invalido.');
      }

      const normalizedProducts = data.products.map(normalizeProduct);
      productsCache = normalizedProducts;
      return normalizedProducts;
    } catch {
      productsCache = productsFallback;
      return productsFallback;
    }
  })();

  try {
    return await productsRequest;
  } finally {
    productsRequest = null;
  }
};

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
