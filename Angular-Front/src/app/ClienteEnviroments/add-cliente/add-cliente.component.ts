import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {
  nuovoCliente!: Cliente[];

  constructor(private clienteService: ClienteService, private http: HttpClient, private router: Router){}


  aggiungiCliente(clienti: {id_cliente: string, nome: string, p_iva: string, indirizzo: string, cap: string, iban: string, telefono: string, email: string, pec: string, fax: string}){
   console.log(clienti)
   this.clienteService.addCustomers(clienti).subscribe((res)=> {console.log(res)})
   this.router.navigate(['/'])
  }

}
