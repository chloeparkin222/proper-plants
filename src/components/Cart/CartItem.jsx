export default function CartItem({ item, increment, decrement }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <span style={{ fontSize: "24px" }}>{item.image}</span>
      {" "}{item.name}

      <div>
        <button onClick={() => decrement(item.id)}>-</button>
        {" "}{item.quantity}{" "}
        <button onClick={() => increment(item.id)}>+</button>
      </div>
    </div>
  );
}
