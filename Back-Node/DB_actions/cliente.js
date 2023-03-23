const express = require("express");
const app = express();
const router = express.Router();
const connectionDb = require("../src/db");
const server = require("../src/server");
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/cliente", (req, res) => {
    connectionDb.query("SELECT * FROM cliente", (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        const cliente = rows;
        res.send(cliente);
        //console.log(cliente);
      }
    });
  });


  router.get(`/cliente/:id`, (req, res) => {
    var id = req.params.id;
    connectionDb.query(
      `SELECT * FROM cliente WHERE id_cliente = '${id}' `,
      (err, result) => {
        if (err) {
          console.log(err);
    
        } else {
          //console.log(result);
          res.send(result[0])
        }
      }
    );
  });

  router.get(`/clienteAzienda/:id`, (req, res) => {
    var id = req.params.id;
    connectionDb.query(
      `SELECT c.id_cliente, c.nome, c.p_iva, c.indirizzo, c.cap, c.iban, c.telefono, c.email, c.telefono, c.pec, c.fax \
      FROM cliente c \
      INNER JOIN azienda_cliente c_a ON c.id_cliente = c_a.id_cliente \
      INNER JOIN azienda a ON c_a.id_azienda = a.id_azienda \
      WHERE a.id_azienda ='${id}' `,
      (err, result) => {
        if (err) {
          console.log(err);
    
        } else {
          //console.log(result);
          res.send(result)
        }
      }
    );
  });

  module.exports = router;