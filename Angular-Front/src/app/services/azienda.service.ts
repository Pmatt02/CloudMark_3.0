import { Injectable } from '@angular/core';
import { Azienda } from '../modules/azienda';
import { Observable, pipe, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL, URL1 } from 'src/environments/config';
import { Dipendente } from '../modules/dipendente';
import { DipendenteResult } from '../modules/dipendente-result';
import { Account } from '../modules/account';

@Injectable({
  providedIn: 'root',
})
export class AziendaService {
  aziende!: Azienda[];
  risultato!: Observable<Dipendente[]>;

  constructor(private http: HttpClient) {}
  // tutte le aziende
  getAllCompanies(): Observable<Azienda[]> {
    // return this.http.get<Azienda[]>(`${URL}/azienda/all`)
    return this.http.get<Azienda[]>('http://localhost:3000/');
  }
  // singola azienda by id
  getCompanyById(id: string) {
    // return this.http.get<Azienda>(`${URL}/azienda/company?id=${id}`).pipe(tap((data)=>{console.log(data)}))
    return this.http.get<Azienda>(`${URL1}/azienda/${id}`).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }
  // aggiungi azienda
  addCompany(arg: any) {
    //   return  this.http.post<Azienda[]>(`${URL}/azienda/new`, arg)
    return this.http.post<Azienda[]>(`${URL1}/azienda/addAzienda`, arg);
  }
  // elimina azienda
  deleteCompany(id: string) {
    // return this.http.delete<Azienda[]>(`${URL}/azienda/delete?company=${id}`)
    return this.http.delete<Azienda[]>(`${URL1}/aziendaDelete/${id}`);
  }
  // aggiorna azienda
  updateCompany(arg: any) {
    // return this.http.put<Azienda[]>(`${URL}/azienda/update`, arg)
    return this.http.put<Azienda[]>(`${URL1}/aziendaUpdate`, arg);
  }
  //ricerca dipendente
  ricercaDipendente(dipendente: any) {
    return this.http.get<DipendenteResult[]>(
      `${URL1}/ricercaDipendente/${dipendente}`
    );
  }
  getCredentials() {
    return this.http.get<any>(`${URL1}/credentials`);
  }

  getAccount() {
    return this.http.get<Account[]>(`${URL1}/account`);
  }

  getUser() {
    return this.http.get<Account>(`${URL1}/user`);
  }
  updateUser(abilitato: any, id_account: any) {
    return this.http.post<Account>(`${URL1}/accountUpdate/${abilitato}/${id_account}`, null);
  }
}
