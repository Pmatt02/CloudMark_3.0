const express = require("express");
const app = express();
const router = express.Router();
const connectionDb = require("../src/db");
const bodyParser = require('body-parser');
const server = require("../src/server");
//var Azienda = require("../models/aziendaModel");


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  connectionDb.query("SELECT * FROM azienda", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      const aziende = rows;
      res.send(aziende);
    }
  });
});


router.get(`/azienda/:id`, (req, res) => {
  var id = req.params.id;
  connectionDb.query(
    `SELECT * FROM azienda WHERE id_azienda = '${id}' `,
    (err, result) => {
      if (err) {

        console.log(err);

      } else {

        res.send(result[0])

      }
    }
  );
});




router.post("/azienda/addAzienda", (req, res) => {
  var dati= req.body
  console.log(dati.id_azienda)
  connectionDb.query(
    `INSERT INTO azienda (id_azienda, nome, p_iva, indirizzo, cap, iban, telefono, email, pec, fax) \
    VALUE ('${dati.id_azienda}','${dati.nome}','${dati.p_iva}','${dati.indirizzo}','${dati.cap}','${dati.iban}','${dati.telefono}','${dati.email}','${dati.pec}','${dati.fax}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);

      }
    }
  );
});

router.delete("/aziendaDelete/:id", (req, res) => {
  var id = req.params.id;
  connectionDb.query(
    `DELETE from azienda where id_azienda= '${id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);

      }
    }
  );
});

router.put("/aziendaUpdate", (req, res) => {
  var dati= req.body
  console.log(dati.id_azienda)
  connectionDb.query(
    `UPDATE azienda\
    SET nome='${dati.nome}', p_iva= '${dati.p_iva}', indirizzo= '${dati.indirizzo}', cap='${dati.cap}', iban='${dati.iban}', \
    telefono='${dati.telefono}', email='${dati.email}', pec='${dati.pec}', fax='${dati.fax}'\
    WHERE id_azienda='${dati.id_azienda}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);

      }
    }
  );
});




module.exports = router;