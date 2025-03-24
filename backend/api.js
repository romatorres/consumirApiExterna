import express from "express";
import cors from "cors";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersPath = path.join(__dirname, "users.json");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// Função auxiliar para ler usuários de um arquivo
async function readUsers() {
  try {
    const data = await fs.readFile(usersPath, "utf8");
    return JSON.parse(data).users;
  } catch (error) {
    return [];
  }
}

// Função auxiliar para gravar usuários em arquivo
async function writeUsers(users) {
  await fs.writeFile(usersPath, JSON.stringify({ users }, null, 2));
}

//Metodo GET
app.get("/api", async (req, res) => {
  const users = await readUsers();
  res.json(users);
});

app.get("/api/:id", async (req, res) => {
  const users = await readUsers();
  const id = req.params.id;
  const user = users.find((user) => Number(user.id) === Number(id));

  if (!user) {
    return res.status(404).json("Usuário não encontrado");
  }
  res.json(user);
});

//Metodo POST
app.post("/api", async (req, res) => {
  const users = await readUsers();
  const lastId = users.length > 0 ? users[users.length - 1].id : 0;
  const newUser = {
    id: lastId + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  users.push(newUser);
  await writeUsers(users);
  res.status(201).json("Usuário adicionado com sucesso!");
});

//Metodo PUT
app.put("/api/:id", async (req, res) => {
  const users = await readUsers();
  const id = req.params.id;
  const userIndex = users.findIndex((user) => Number(user.id) === Number(id));

  if (userIndex === -1) {
    return res.status(404).json("Usuário não encontrado");
  }

  const updatedUser = {
    ...users[userIndex],
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  users[userIndex] = updatedUser;
  await writeUsers(users);
  res.json("Usuário atualizado com sucesso!");
});

//Metodo DELETE
app.delete("/api/:id", async (req, res) => {
  const users = await readUsers();
  const userId = req.params.id;
  const newUsers = users.filter((user) => Number(user.id) !== Number(userId));

  if (newUsers.length === users.length) {
    return res.status(404).json("Usuário não encontrado");
  }

  await writeUsers(newUsers);
  res.json("Usuário deletado com sucesso!");
});

app.listen(PORT, () =>
  console.log(`O servidor está rodando na porta: ${PORT}`)
);
