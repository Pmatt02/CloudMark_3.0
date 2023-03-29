import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, toArray } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import {saveAs} from 'file-saver';
import * as Papa from 'papaparse';

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
      //window.history.replaceState("", "", '/Cliente');
    })
    // console.log(this.cliente$);
    

      
      
    }
    

    downloadFile() {
      this.servizioCliente.getCustomersByAzienda(this.clienteId).subscribe((data: Cliente[]) => {
        const csvData = Papa.unparse(data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'file.csv');
      })
    }
  }



