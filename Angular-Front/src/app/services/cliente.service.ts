import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL, URL1 } from 'src/environments/config';
import { Cliente } from '../modules/cliente';
import { Commessa } from '../modules/commessa';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor(private http: HttpClient) { };
  // tutti i clienti
  getAllCustomers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${URL}/cliente/all`)
  };
  // cliente by id
  getCustomersById(id: string) {
    return this.http.get<Cliente>(`${URL1}/cliente/${id}`);
  }
  
  // aggiungi cliente
  addCustomers(arg: any){
    // return  this.http.post<Cliente[]>(`${URL}/cliente/new`, arg)
    return  this.http.post<Cliente[]>(`${URL1}/clienteAggiungi`, arg)
  }
  addCommessa(arg: any){
    // return  this.http.post<Cliente[]>(`${URL}/cliente/new`, arg)
    return  this.http.post<Commessa>(`${URL1}/commessaAggiungi`, arg)
  }
  
  addLinkCompany(id_azienda: string, id_cliente: string) {
    return this.http.post<any>(`${URL1}/clienteAziendaAdd/${id_azienda}-${id_cliente}`, null)
  }

  // elimina cliente
  deleteCustomer(id: string){
    return this.http.delete<Cliente[]>(`${URL}/cliente/delete?customer=${id}`)
  }
  // clienti da id azienda
  getCustomersByAzienda(id: string){
    // return this.http.get<Cliente[]>(`${URL}/clientecustomer_by_id_azienda?id=${id}`)
    return this.http.get<Cliente[]>(`${URL1}/clienteAzienda/${id}`)
  }
  // clienti da id commessa
  getCustomersByCommessa(id: string){
    return this.http.get<Cliente[]>(`${URL}/clientecustomer_by_commessa?id=${id}`)
  }
  getCommessabyCustomerId(id: string){
    return this.http.get<Commessa[]>(`${URL1}/commesseCliente/${id}`)
  }

  getCommessaById(id: string){
    return this.http.get<Commessa>(`${URL1}/commesse/${id}`)
  }

  // aggiorna cliente
  updateCliente(arg: any){
    return this.http.put<Cliente[]>(`${URL1}/clienteUpdate`, arg);
  }
  updateCommessa(arg: any){
    return this.http.put<Commessa>(`${URL1}/commessaUpdate`, arg);
  }


}
