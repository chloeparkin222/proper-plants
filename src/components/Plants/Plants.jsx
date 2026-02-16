import PlantCard from "./PlantCard";

export default function Plants({ plants, cart, addToCart }) {
  return (
    <div>
      <h2>Plants</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        {plants.map(plant => (
          <PlantCard
            key={plant.id}
            plant={plant}
            cart={cart}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}