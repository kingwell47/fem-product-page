import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CartItem from "./CartItem";

interface CartProps {
  outsideClose: (e: MouseEvent | TouchEvent) => void;
}

function Cart({ outsideClose }: CartProps): JSX.Element {
  const { cartItems, setCartItems } = useContext(CartContext);
  const cartToggleRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(cartToggleRef, outsideClose);

  const handleRemoveItem = (itemName: string): void => {
    const newItems = cartItems.filter((item) => item.itemName !== itemName);
    setCartItems(newItems);
  };

  const handleCheckout = (): void => {
    alert("This is where I would put my redirect...if I had one!");
  };

  return (
    <div ref={cartToggleRef} className='cart'>
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
          <button
            type='button'
            className='cart__checkout'
            onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
