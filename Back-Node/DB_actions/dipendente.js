const express = require("express");
const app = express();
const router = express.Router();
const connectionDb = require("../src/db");
const server = require("../src/server");
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/dipendente", (req, res) => {
    connectionDb.query("SELECT * FROM dipendente", (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        const dipendente = rows;
        res.send(dipendente);
        //console.log(dipendente);
      }
    });
  });


  router.get(`/dipendente/:id`, (req, res) => {
    var id = req.params.id;
    connectionDb.query(
      `SELECT * FROM dipendente WHERE id_dipendente = '${id}' `,
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

  router.get(`/dipendenteAzienda/:id`, (req, res) => {
    var id = req.params.id;
    connectionDb.query(
      `SELECT d.id_dipendente, d.nome, d.cognome, d_a.matricola, d.cf, d.iban, d.id_tipo_contratto, d.email, d.telefono, d.data_nascita \
                        FROM dipendente d \
                        INNER JOIN dipendente_azienda d_a ON d.id_dipendente = d_a.id_dipendente \
                        INNER JOIN azienda a ON d_a.id_azienda = a.id_azienda \
                        WHERE a.id_azienda = '${id}' `,
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

  router.delete(`/dipendenteDelete/:id`, (req, res) => {
    var id = req.params.id;
    connectionDb.query(
      `DELETE from dipendente where id_dipendente='${id}' `,
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

  router.delete(`/dipendenteAziendaDelete/:id_dipendente-:id_azienda`, (req, res) => {
    var id_dipendente = req.params.id_dipendente;
    var id_azienda = req.params.id_azienda;
    connectionDb.query(
      `DELETE from dipendente_azienda where id_dipendente='${id_dipendente}' and id_azienda='${id_azienda}' `,
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


  router.post(`/AddDipendente`, (req, res) => {
    var dati= req.body
    console.log(dati)
    connectionDb.query(
      `INSERT INTO dipendente (id_dipendente, nome, cognome, cf, iban, id_tipo_contratto, email, telefono, data_nascita) \
      VALUES ('${dati.id_dipendente}','${dati.nome}','${dati.cognome}','${dati.cf}','${dati.iban}','${dati.id_tipo_contratto}','${dati.email}','${dati.telefono}','${dati.data_nascita}') `,
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

  router.post(`/AddDipendenteAzienda`, (req, res) => {
    var dati= req.body
    console.log(dati)
    connectionDb.query(
      `INSERT INTO dipendente_azienda (id_dipendente,id_azienda, data_inizio_rapporto, matricola,data_fine_rapporto)\
      VALUES ('${dati.id_dipendente}', '${dati.id_azienda}','${dati.data_inizio_rapporto}','${dati.matricola}','${dati.data_fine_rapporto}') `,
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

  router.put("/dipendenteUpdate", (req, res) => {
    var dati= req.body
    console.log(dati)
    connectionDb.query(
      `UPDATE dipendente\
      SET nome= '${dati.nome}', cognome= '${dati.cognome}', cf='${dati.cf}', iban='${dati.iban}', id_tipo_contratto='${dati.id_tipo_contratto}', email='${dati.email}', telefono='${dati.telefono}', data_nascita='${dati.data_nascita}'\
          WHERE id_dipendente='${dati.id_dipendente}'`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          //console.log(result);
          res.send(result);
  
        }
      }
    );
  });


  router.post(`/dipendenteCommessaAdd/:id_dipendente/:id_commessa/:rate`, (req, res) => {
    var id_dipendente= req.params.id_dipendente;
    var id_commessa =req.params.id_commessa;
    var rate =req.params.rate;
    console.log(id_dipendente, id_commessa, rate)
    connectionDb.query(
      `insert into commessa_dipendente (id_commessa, id_dipendente, rate)\
      values ('${id_commessa}', '${id_dipendente}', '${rate}') `,
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

  router.get(`/ricercaDipendente/:dipendente` , (req, res) => {
    var dipendente = req.params.dipendente;

      connectionDb.query(
   `SELECT t_p.nome_tipo_contratto, d.id_dipendente, d_a.id_azienda, d.nome, d.cognome, d_a.matricola, d.cf, d_a.data_inizio_rapporto, d.id_tipo_contratto \
                        FROM dipendente d \
                        INNER JOIN dipendente_azienda d_a ON d.id_dipendente = d_a.id_dipendente \
                        INNER JOIN azienda a ON d_a.id_azienda = a.id_azienda \
                        INNER JOIN tipo_contratto t_p ON t_p.id_tipo_contratto = d.id_tipo_contratto
                        WHERE d_a.matricola like '${dipendente}%' \
                        OR d.nome like '${dipendente}%' \
                        OR d.cognome like '${dipendente}%' \
                        OR d.cf like '${dipendente}%' \
                        OR (concat(d.nome, ' ', d.cognome) like '${dipendente}%')  \
                        OR (concat(d.cognome, ' ', d.nome) like '${dipendente}%')`,
        (err, result) => {
          if (err) {
          console.log(err);
    
        } else {
          console.log(result);
          res.send(result)
        }
      }
      )
    
  })
  router.get('/account', (req, res)=>{
    connectionDb.query('select a.id_account, user,d.nome, d.cognome, d.cf, email, password, abilitato, nome_tipo_account from account a \
    inner join account_dipendente ad on ad.id_account = a.id_account \
    inner join tipo_account ta on a.id_tipo_account = ta.id_tipo_account\
    inner join dipendente d on d.id_dipendente=ad.id_dipendente', (err, result)=>{
      if(err){
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  )})

  router.post(`/accountUpdate/:abilitato/:id_account`, (req, res) => {
    var abilitato= req.params.abilitato;
    var id_account= req.params.id_account
    connectionDb.query(
      `UPDATE account\
      SET abilitato='${abilitato}'\
          WHERE id_account='${id_account}'`,
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