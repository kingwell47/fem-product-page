import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

interface CartProps {
  open: boolean;
}

function Cart({ open }: CartProps): JSX.Element {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className={open ? "cart open" : "cart"}>
      <div className='cart__header'>Cart</div>
      <hr />
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : <CartItem />}
      {cartItems.length > 0 && (
        <button type='button' className='cart__checkout'>
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
