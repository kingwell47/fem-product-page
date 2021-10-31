import { useState, createContext } from "react";

export type ItemContent = {
  itemName: string;
  amount: number;
  price: number;
  discount: number;
  ogPrice: number;
  image: string;
};

type ProviderContext = {
  cartItems: ItemContent[];
  setCartItems: Function;
};

export const CartContext = createContext<ProviderContext>({
  cartItems: [],
  setCartItems: () => {},
});

type Props = {
  children: JSX.Element;
};

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [cartItems, setCartItems] = useState<ItemContent[]>([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
