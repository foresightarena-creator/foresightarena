import { useState } from "react";

export default function Predict() {
  const [predictions, setPredictions] = useState([]);
  const [newPrediction, setNewPrediction] = useState("");

  const addPrediction = (e) => {
    e.preventDefault();
    if (!newPrediction.trim()) return;
    const newItem = { id: Date.now(), text: newPrediction };
    setPredictions([newItem, ...predictions]);
    setNewPrediction("");
  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      background: "linear-gradient(180deg, #111827, #1e1b4b)",
      minHeight: "100vh",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔮 Prediction Arena</h1>
      <form onSubmit={addPrediction} style={{ display: "flex", gap: "10px", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Enter your prediction..."
          value={newPrediction}
          onChange={(e) => setNewPrediction(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#111",
            color: "white"
          }}
        />
        <button type="submit" style={{
          background: "#4f46e5",
          border: "none",
          borderRadius: "8px",
          padding: "10px 16px",
          color: "white",
          fontWeight: "bold"
        }}>Submit</button>
      </form>

      <section style={{ width: "90%", maxWidth: "500px" }}>
        {predictions.map((p) => (
          <div key={p.id} style={{
            background: "#1e1b4b",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px"
          }}>
            <p>{p.text}</p>
          </div>
        ))}
      </section>

      <a href="/" style={{ marginTop: "2rem", color: "#818cf8", textDecoration: "none" }}>← Back to Home</a>
    </main>
  );
}
