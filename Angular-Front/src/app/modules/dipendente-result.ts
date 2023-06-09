export interface DipendenteResult {
  id_dipendente: string;
  id_azienda: string;
  nome: string | null;
  cognome: string | null;
  cf: string;
  iban: string;
  id_tipo_contratto: string;
  email: string;
  telefono: string;
  data_nascita: Date;
  data_inizio_rapporto: Date;
  matricola: string | null;
  nome_tipo_contratto: string;
}
