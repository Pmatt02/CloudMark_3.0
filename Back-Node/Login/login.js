const express = require("express");
const session = require("express-session");
const app = express();
const flash = require('connect-flash');
const connectionDb = require('../src/db');
const router = express.Router();
const path = require('path')
var insertMail = '';
var insertPassword = '';
var id = 'ciao';

let checks=(args)=>{
    for(let i in args){
        if (args[i].email === insertMail && args[i].password === insertPassword){
            return true;
        }
    }
}

router.use(flash());
router.use(express.static('public'));
router.use(express.urlencoded({ extended: true }));

// const errMsg = document.getElementById("err_msg");

// const porta = process.env.PORT || 3000;
const porta = 3000;


router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

const checkAuth = (req, res, next) => {
if (!req.session.userId || req.session.userId== undefined) {
    res.redirect('/login');
} else {
    next();
}}

router.get("/login", (req, res) => {
    req.session.userId = undefined;
    res.sendFile(path.join(__dirname, "../index.html"));
})

router.post("/login", (req, res) => {
    var emaill = req.body.email;
    var passwordd = req.body.password;
    insertMail = emaill;
    insertPassword = passwordd;

    connectionDb.query(
        `select email, password, abilitato from account a \
        inner join account_dipendente ad on ad.id_account = a.id_account \
        inner join dipendente d on d.id_dipendente=ad.id_dipendente`,
        (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                dbData=result;
                // console.log(checks(dbData))

                if (checks(result) == true) {
                    //console.log(req.session.userId);
                    req.session.userId = 1;
                    res.redirect('/home');
                } else {
                    console.log('Credenziali Sbagliate');
                    res.send("<script>window.alert('Credenziali Errate');window.location.replace('/login')</script>");
                    router.get("/login", (req, res) => {
                        req.session.userId = undefined;
                        res.sendFile(__dirname + "/index.html");
                    })
                }       
            }         
        }
                //return console.log(result[0].password);
    );
    // console.log("Email: " + emaill)
    // console.log("Password: " + passwordd)
})

router.get('/home', checkAuth, (req, res) => {
    res.redirect("http://localhost:4200");
})

const getCompanyById = router.get("/azienda", (req, res) => {
    connectionDb.query(`SELECT * FROM azienda WHERE id_azienda = '${id}' `,(err, res) => {
           if(err) {

              return console.log(err);

            } else {
               
               console.log(res)
               
            }
       })
    }
);

module.exports = router;
