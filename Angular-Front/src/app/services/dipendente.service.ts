import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL, URL1 } from 'src/environments/config';
import { Dipendente } from '../modules/dipendente';

@Injectable({
  providedIn: 'root'
})
export class DipendenteService {
  dipendenti!: Dipendente[];

  constructor(private http: HttpClient) { };

  // tutti i dipendenti
  getAllEmployees() {
    return this.http.get<Dipendente[]>(`${URL}/dipendente/all`)
  };
  // singolo dipendente tramite id
  getEmployeeById(id: string) {
    // return this.http.get<Dipendente>(`${URL}/dipendente/employee?id=${id}`)
    return this.http.get<Dipendente[]>(`${URL1}/dipendente/${id}`)
  };
  // aggiungi dipendente
  addEmployee(arg: object) {
    // return this.http.post<Dipendente[]>(`${URL}/dipendente/new`, arg)
    return this.http.post<Dipendente[]>(`${URL1}/AddDipendente`, arg)
  };
  // trovare diversi dipendenti
  findMultipleEmployees(value:string, id:string) {
    return this.http.get<Dipendente[]>(`${URL}/dipendente/multiemployee?value=${value}&id=${id}`)
  };
  // aggiornare dipendente
  updateEmployee(arg: any) {
    // return this.http.put<Dipendente>(`${URL}/dipendente/update`, arg)
    return this.http.put<Dipendente>(`${URL1}/dipendenteUpdate`, arg)
  };
  // eliminare dipendnete
  deleteEmployee(id:string) {
    // return this.http.delete<Dipendente>(`${URL}/dipendente/delete?dipendente=${id}`)
    return this.http.delete<Dipendente>(`${URL1}/dipendenteDelete/${id}`)
  };
  // tutti i dipendenti di un'unica azienda
  getEmployeesByIdAzienda(id:string) {
    // return this.http.get<Dipendente[]>(`${URL}/dipendenteemployees_by_id_azienda?id=${id}`)
    return this.http.get<Dipendente[]>(`${URL1}/dipendenteAzienda/${id}`)
  }
  // link all'azionda
  linkToCompany(args: any){
    // return this.http.post<any>(`${URL}/dipendente/link`, args)
    return this.http.post<any>(`${URL1}/AddDipendenteAzienda`, args)
  }
  linkToCommessa(id_dipendente: string, id_commessa: string, rate: string){
    // return this.http.post<any>(`${URL}/dipendente/link`, args)
    return this.http.post<any>(`${URL1}/dipendenteCommessaAdd/${id_dipendente}/${id_commessa}/${rate}`, null)
  }

  deleteLink(id_dipendente: string, id_azienda: string){
    // return this.http.delete<any>(`${URL}/dipendente/deletelink?id_dipendente=${id_dipendente}&id_azienda=${id_azienda}`)
    return this.http.delete<any>(`${URL1}/dipendenteAziendaDelete/${id_dipendente}-${id_azienda}`)
  }
}
