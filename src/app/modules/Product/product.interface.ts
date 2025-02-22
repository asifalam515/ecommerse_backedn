interface TProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}

interface TVariant {
  type: string;
  value: string;
}

interface TInventory {
  quantity: number;
  inStock: boolean;
}
