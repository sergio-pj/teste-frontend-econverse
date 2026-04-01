export interface ApiProduct {
  productName: string;
  descriptionShort?: string;
  photo: string;
  price: number;
}

export interface Product {
  id: number;
  productName: string;
  description: string;
  photo: string;
  price: number;
}
