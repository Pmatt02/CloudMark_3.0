export interface Commessa {
  id_commessa: string;
  descrizione: string | null;
  id_cliente: string | null;
  id_azienda: string;
  data_inizio: Date | null;
  data_fine: Date | null;
}
