import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("Sending magic link... (demo only)");
    setTimeout(() => {
      setMessage("✅ Magic link sent! Check your email.");
    }, 2000);
  };

  return (
    <main style={container}>
      <h1>Login to ForesightArena</h1>
      <form onSubmit={handleLogin} style={form}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />
        <button type="submit" style={button}>Login</button>
      </form>
      {message && <p style={{ marginTop: "1rem", color: "#a5b4fc" }}>{message}</p>}
      <a href="/" style={{ marginTop: "2rem", color: "#818cf8", textDecoration: "none" }}>← Back to Home</a>
    </main>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "linear-gradient(160deg, #000, #1e1b4b)",
  color: "white",
  fontFamily: "sans-serif"
};
const form = { display: "flex", flexDirection: "column", width: "300px", gap: "1rem" };
const input = { padding: "10px", borderRadius: "6px", border: "1px solid #444", background: "#222", color: "white" };
const button = { background: "#4f46e5", border: "none", borderRadius: "6px", padding: "10px", color: "white", fontWeight: "bold" };
