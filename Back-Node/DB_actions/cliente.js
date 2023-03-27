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

  router.post(`/clienteAggiungi`, (req, res) => {
    var dati= req.body
    console.log(dati)
    connectionDb.query(
      `INSERT INTO cliente (id_cliente, nome, p_iva, indirizzo, cap, iban, telefono, email, pec, fax) \
      VALUE ('${dati.id_cliente}','${dati.nome}','${dati.p_iva}','${dati.indirizzo}','${dati.cap}','${dati.iban}','${dati.telefono}','${dati.email}','${dati.pec}','${dati.fax}') `,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.send(result)
        }
      }
    );
  });

  router.post(`/clienteAziendaAdd/:id_azienda/:id_cliente`, (req, res) => {
    var id_azienda= req.params.id_azienda;
    var id_cliente =req.params.id_cliente
    console.log(id_azienda, id_cliente)
    connectionDb.query(
      `insert into azienda_cliente (id_azienda, id_cliente)
      values ('${id_azienda}','${id_cliente}') `,
      (err, result) => {
        if (err) {
          console.log(err);
    
        } else {
          console.log(result);
          res.send(result)
        }
      }
    );
  });


router.put("/clienteUpdate", (req, res) => {
  var dati = req.body;
  connectionDb.query(
    `UPDATE cliente\
    SET nome='${dati.nome}', p_iva= '${dati.p_iva}', indirizzo= 'dati.${dati.indirizzo}', cap='${dati.cap}', iban='${dati.iban}', telefono='${dati.telefono}', email='${dati.email}', pec='${dati.pec}', fax='${dati.fax}'\
    WHERE id_cliente='${dati.id_cliente}'`,
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

//COMMESSE

router.get("/commesseCliente/:id", (req, res) => {
  var id_cliente = req.params.id;
  connectionDb.query(`SELECT * FROM commessa where id_cliente='${id_cliente}'`, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      const cliente = rows;
      res.send(cliente);
      //console.log(cliente);
    }
  });
});
router.get("/commesse/:id", (req, res) => {
  var id_commessa = req.params.id;
  connectionDb.query(`SELECT * FROM commessa where id_commessa='${id_commessa}'`, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      const cliente = rows;
      res.send(cliente[0]);
      //console.log(cliente);
    }
  });
});

router.put("/commessaUpdate", (req, res) => {
  var dati = req.body;
  connectionDb.query(
    `UPDATE commessa\
    SET descrizione='${dati.descrizione}', id_cliente= '${dati.id_cliente}', id_azienda= '${dati.id_azienda}', data_inizio='${dati.data_inizio}', data_fine='${dati.data_fine}'\
    WHERE id_commessa='${dati.id_commessa}'`,
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

router.post(`/commessaAggiungi`, (req, res) => {
  var dati= req.body
  console.log(dati)
  connectionDb.query(
    `INSERT INTO commessa (id_commessa, descrizione, id_cliente, id_azienda, data_inizio, data_fine) \
    VALUE ('${dati.id_commessa}','${dati.descrizione}','${dati.id_cliente}','${dati.id_azienda}','${dati.data_inizio}','${dati.data_fine}') `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result)
      }
    }
  );
});


  module.exports = router;