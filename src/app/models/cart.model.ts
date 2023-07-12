export interface Cart {
  total?: string;
  items: Array<CartItem>;
}

export interface CartItem {
  price: number;
  quantity: number;
  id: number;
  title: string;
  subtitle: string;
  imageSrc: string;
  category: string;
}
