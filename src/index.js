import express from "express"
import { persons } from "./persons.js";
import cors from "cors"
const app = express()
const port = 3000
app.use(cors())
app.use( express.json())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
  response.json( persons )
})

app.post("/cadastrar", (request, response) => {
  const {name, email, age, nickname, passaword} =request.body.user
  console.log(`${name}, ${email}, ${age}, ${nickname}, ${passaword}`)

  response.status(201).json({ massage: "usuario cadastrado com sucesso" })
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`)
})
