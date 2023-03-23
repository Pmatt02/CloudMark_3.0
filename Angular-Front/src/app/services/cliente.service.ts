import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/environments/config';
import { Cliente } from '../modules/cliente';

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
    return this.http.get<Cliente[]>(`${URL}/cliente/customer?id=${id}`)
  }
  // aggiungi cliente
  addCustomers(arg: any){
    return  this.http.post<Cliente[]>(`${URL}/cliente/new`, arg)
  }
  // elimina cliente
  deleteCustomer(id: string){
    return this.http.delete<Cliente[]>(`${URL}/cliente/delete?customer=${id}`)
  }
  // clienti da id azienda
  getCustomersByAzienda(id: string){
    return this.http.get<Cliente[]>(`${URL}/clientecustomer_by_id_azienda?id=${id}`)
  }
  // clienti da id commessa
  getCustomersByCommessa(id: string){
    return this.http.get<Cliente[]>(`${URL}/clientecustomer_by_commessa?id=${id}`)
  }


}
