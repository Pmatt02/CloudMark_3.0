import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit{
  nuovoCliente!: Cliente[];
  aziendaId!: any;

  constructor(private clienteService: ClienteService, private http: HttpClient, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.aziendaId = this.route.snapshot.paramMap.get('id')
    console.log(this.aziendaId)
    window.history.replaceState("", "", '/AggiungiCliente');
  }


  aggiungiCliente(clienti: {id_cliente: string, nome: string, p_iva: string, indirizzo: string, cap: string, iban: string, telefono: string, email: string, pec: string, fax: string}){
   console.log(clienti)
   var cliente= clienti.id_cliente
  this.clienteService.addCustomers(clienti).pipe(concatMap(() => 
  this.clienteService.addLinkCompany(this.aziendaId, cliente))).subscribe()
  //  this.router.navigate(['/'])
  }

}
