export default function PlantCard({ plant, addToCart }) {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", textAlign: "center" }}>
      <div style={{ fontSize: "50px" }}>{plant.image}</div>
      <h3>{plant.name}</h3>

      <button onClick={() => addToCart(plant)}>
        Add to cart
      </button>
    </div>
  );
}