import { useState } from "react";
import PLANTS from "./data";

import Plants from "./components/Plants/Plants";
import Cart from "./components/Cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const existing = cart.find(item => item.id === plant.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function increment(id) {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrement(id) {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updated.filter(item => item.quantity > 0));
  }

  return (
    <div>
      <h1>Proper Plants</h1>
      <hr />

      <div style={{ display: "flex", gap: "40px" }}>
        <Plants plants={PLANTS} cart={cart} addToCart={addToCart} />
        <Cart cart={cart} increment={increment} decrement={decrement} />
      </div>
    </div>
  );
}