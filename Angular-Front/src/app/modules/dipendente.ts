export interface Dipendente {
  id_dipendente: string;
  nome: string | null;
  cognome: string | null;
  cf: string;
  iban: string;
  id_tipo_contratto: string;
  email: string;
  telefono: string;
  data_nascita: Date;
}
