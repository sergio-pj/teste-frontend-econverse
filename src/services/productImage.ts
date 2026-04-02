import celularVitrine from '../assets/celular-vitrine.svg';
import iphone11ProMax1 from '../assets/Iphone 11 PRO MAX BRANCO 1.svg';
import iphone11ProMax2 from '../assets/Iphone 11 PRO MAX BRANCO 2.svg';
import iphone13Mini1 from '../assets/IPHONE 13 MINI 1.svg';
import iphone13Mini2 from '../assets/IPHONE 13 MINI 2.svg';

const getVariantNumber = (productName: string): number => {
  const match = productName.match(/(\d+)\s*$/);
  return match ? Number.parseInt(match[1], 10) : 1;
};

export const resolveProductPhoto = (productName: string, apiPhoto?: string): string => {
  const normalizedName = productName.trim().toUpperCase();
  const variant = getVariantNumber(normalizedName);

  if (normalizedName.includes('IPHONE 11 PRO MAX BRANCO')) {
    return variant % 2 === 0 ? iphone11ProMax2 : iphone11ProMax1;
  }

  if (normalizedName.includes('IPHONE 13 MINI')) {
    return variant % 2 === 0 ? iphone13Mini2 : iphone13Mini1;
  }

  if (apiPhoto && apiPhoto.trim()) {
    return apiPhoto;
  }

  return celularVitrine;
};
