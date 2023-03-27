import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, async, concat, concatMap } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { Commessa } from 'src/app/modules/commessa';
import { ClienteService } from 'src/app/services/cliente.service';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-add-commessa',
  templateUrl: './add-commessa.component.html',
  styleUrls: ['./add-commessa.component.css']
})
export class AddCommessaComponent implements OnInit{
  clienteId !: any;
  cliente!: Observable<Cliente>;
  id_commessa!: any;
  id_dipendente !: any; 

  constructor(private servizioDipendente: DipendenteService, private servizioCliente: ClienteService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.clienteId=this.route.snapshot.paramMap.get('id');
    this.cliente=this.servizioCliente.getCustomersById(this.clienteId);
  }

  addCommessa(form1: FormGroup, form2: FormGroup){
    this.id_commessa=form1.controls['id_commessa'].value
    this.id_dipendente= form2.controls['id_dipendente'].value 
    this.servizioCliente.addCommessa(form1.value).pipe(concatMap(() => 
    this.servizioCliente.linkToCommessa(this.id_dipendente, this.id_commessa, form2.controls['rate'].value))).subscribe()
    
    console.log(form1.value)
    console.log(form1.controls['id_azienda'].value, form2.controls['id_dipendente'].value, form2.controls['rate'].value)
  }
}
