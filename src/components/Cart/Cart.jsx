import CartItem from "./CartItem";

export default function Cart({ cart, increment, decrement }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </div>
  );
}
