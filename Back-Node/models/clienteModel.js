class Cliente{
    constructor(
        id_cliente, nome, p_iva, indirizzo, cap, iban, telefono, email, pec, fax
    ){
        this.id_cliente=id_cliente;
        this.nome=nome;
        this.p_iva=p_iva;
        this.indirizzo=indirizzo;
        this.cap=cap;
        this.iban=iban;
        this.telefono=telefono;
        this.email=email;
        this.pec=pec;
        this.fax=fax;
    }
}

module.exports= Cliente