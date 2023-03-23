const express = require("express");
const azienda = require('../DB_actions/azienda');
const dipendente = require('../DB_actions/dipendente')
const cliente = require('../DB_actions/cliente')
const app = express();
const porta = 3000;
const router = express.Router();

let cors = require("cors");
app.use(cors());

app.listen(porta, () => {
    console.log("server avviato sulla porta " + porta);
  })

app.use("/", azienda)
app.use('/', dipendente)
app.use('/', cliente)

