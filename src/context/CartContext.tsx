import { useState, createContext } from "react";

export type ItemContent = {
  name: string;
  amount: number;
  price: number;
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
  const [cartItems, setCartItems] = useState<ItemContent[]>([
    {
      name: "Fall Limited Edition Sneakers",
      amount: 3,
      price: 125.0,
    },
  ]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
