import { useState } from "react";
import React, { useContext } from "react";
import { CartContext, ItemContent } from "../../context/CartContext";
import { ItemInterface } from "../../App";
import "./Content.scss";

interface Props {
  itemData: ItemInterface;
}

function Content({ itemData }: Props): JSX.Element {
  const [amount, setAmount] = useState<number>(0);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { brand, itemName, itemDesc, price, discount, ogPrice } = itemData;

  const reduceAmount = (): void => {
    if (amount <= 0) return;
    setAmount(amount - 1);
  };
  const increaseAmount = (): void => {
    if (amount >= 99) return;
    setAmount(amount + 1);
  };

  const handleAddItem = (): void => {
    if (!amount) return;

    const newItem: ItemContent = {
      itemName,
      amount,
      price,
      discount,
      ogPrice,
    };
    setCartItems((prev: ItemContent[]) => [...prev, newItem]);
    console.log(newItem);
  };

  return (
    <section className='content'>
      <h2 className='content__subtitle'>{brand}</h2>
      <h1 className='content__title'>{itemName}</h1>
      <p className='content__text'>{itemDesc}</p>
      <div className='content__price_wrapper'>
        <div className='content__price_left'>
          <div className='content__price'>${price.toFixed(2)}</div>
          <div className='content__discount'>
            {(discount * 100).toFixed(0)}%
          </div>
        </div>
        <div className='content__original_price'>${ogPrice.toFixed(2)}</div>
      </div>
      <div className='content__add_to_cart'>
        <div className='content__amount_wrapper'>
          <button
            type='button'
            className='content__amount_button'
            onClick={reduceAmount}>
            <img
              src={require("../../images/icon-minus.svg").default}
              alt='reduce amount'
            />
          </button>
          <div className='content__amount'>{amount}</div>
          <button
            type='button'
            className='content__amount_button'
            onClick={increaseAmount}>
            <img
              src={require("../../images/icon-plus.svg").default}
              alt='add amount'
            />
          </button>
        </div>
        <button
          type='button'
          className='content__cart_button'
          onClick={handleAddItem}>
          <img
            src={require("../../images/icon-cart-light.svg").default}
            alt=''
            className='content__cart_button_icon'
          />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default Content;
