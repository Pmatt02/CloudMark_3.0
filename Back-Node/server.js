const connectionDb = require('./db');
const express = require("express");
const azienda = require('./azienda');
const dipendente = require('./dipendente')
const cliente = require('./cliente')
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

