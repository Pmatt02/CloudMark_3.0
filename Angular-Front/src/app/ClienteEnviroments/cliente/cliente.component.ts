import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, toArray } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  cliente$!: Observable<Cliente[]>;
  clienteId!: any;
  arra!:any[];
  commesse!:Observable<Cliente[]>;
  numeroCommesse: any;
  id!:any;
  @Input() idaz: any;

  constructor(private router: ActivatedRoute, private servizioCliente: ClienteService){};

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      this.clienteId = this.router.snapshot.paramMap.get('id');
      this.cliente$ = this.servizioCliente.getCustomersByAzienda(this.clienteId)
    })
    // console.log(this.cliente$);
    
    this.router.paramMap.subscribe((param: ParamMap) => {
      this.clienteId = this.router.snapshot.paramMap.get('id');
      console.log(this.clienteId)
      this.commesse=this.servizioCliente.getCustomersByCommessa(this.clienteId)
      this.commesse.pipe(toArray()).subscribe(arra=>{this.numeroCommesse=arra[0].length})
      
      })
    }
    

  addCustomers(){}
}
