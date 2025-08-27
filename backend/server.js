import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// "Banco" fake
const usuarios = [
  { id: 1, email: "teste@email.com", senha: "123456" },
  { id: 2, email: "nicollas@email.com", senha: "abc123" },
];

app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  const user = usuarios.find(u => u.email === email && u.senha === senha);
  if (user) {
    return res.json({ id: user.id, token: "fake-jwt-token-" + user.id });
  } else {
    return res.status(401).json({ message: "Email ou senha inválidos!" });
  }
});

app.listen(5000, () => console.log("Servidor rodando em http://localhost:5000"));
