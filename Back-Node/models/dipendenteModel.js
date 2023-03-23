class Dipendente{
    constructor(
        id_dipendente, nome, cognome, cf, iban, id_tipo_contratto, email, telefono, data_nascita
    ){
        this.id_dipendente=id_dipendente;
        this.nome=nome;
        this.cognome=cognome;
        this.cf=cf;
        this.iban=iban;
        this.id_tipo_contratto=id_tipo_contratto;
        this.email=email;
        this.telefono=telefono;
        this.data_nascita=data_nascita;
    }
}
module.exports= Dipendente