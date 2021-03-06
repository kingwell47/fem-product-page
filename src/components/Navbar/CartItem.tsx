import { ItemContent } from "../../context/CartContext";

type Props = {
  item: ItemContent;
  handleRemove: (name: string) => void;
};

function CartItem({ item, handleRemove }: Props): JSX.Element {
  const { itemName, amount, price, image } = item;

  return (
    <div className='cart__item'>
      <img
        src={require(`../../images/${image}`).default}
        alt='product'
        className='cart__image'
      />
      <div className='cart__text'>
        <div className='cart__item_name'>{itemName}</div>
        <div className='cart__item_price'>
          <div className='cart__item_price_singular'>${price.toFixed(2)}</div>
          <div className='cart__item_price_multiplier'> x {amount} </div>
          <div className='cart__item_price_total'>
            ${(price * amount).toFixed(2)}
          </div>
        </div>
      </div>
      <button
        type='button'
        className='cart__item_delete'
        title='delete'
        onClick={() => handleRemove(itemName)}>
        <svg
          width='14'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'>
          <defs>
            <path
              d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
              id='a'
            />
          </defs>
          <use fill='#C3CAD9' fillRule='nonzero' xlinkHref='#a' />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
