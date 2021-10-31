import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

interface CartProps {
  open: boolean;
}

function Cart({ open }: CartProps): JSX.Element {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemoveItem = (itemName: string): void => {
    const newItems = cartItems.filter((item) => item.itemName !== itemName);
    setCartItems(newItems);
  };

  return (
    <div className={open ? "cart open" : "cart"}>
      <div className='cart__header'>Cart</div>
      <hr />
      <div className='cart__bottom'>
        {cartItems.length === 0 ? (
          <div className='cart__empty'>Your cart is empty.</div>
        ) : (
          cartItems.map((item, index: number) => (
            <CartItem item={item} key={index} handleRemove={handleRemoveItem} />
          ))
        )}
        {cartItems.length > 0 && (
          <button type='button' className='cart__checkout'>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
