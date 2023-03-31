import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, concatMap } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { Commessa } from 'src/app/modules/commessa';
import { AziendaService } from 'src/app/services/azienda.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-commesse',
  templateUrl: './commesse.component.html',
  styleUrls: ['./commesse.component.css']
})
export class CommesseComponent {
  Clienti$!: Observable<Cliente>;
  clienteId!: any;
  commesse !: Observable<Commessa[]>
  permissions: boolean=false;
  constructor(private router: ActivatedRoute, private clientiService: ClienteService, private aziendaService: AziendaService){

  }
  ngOnInit(): void {
    console.log(this.Clienti$);
    this.router.paramMap.subscribe((param: ParamMap) => {
    this.clienteId = this.router.snapshot.paramMap.get('id');
    this.Clienti$ = this.clientiService.getCustomersById(param.get('id')!);
    this.commesse = this.clientiService.getCommessabyCustomerId(this.clienteId);
    window.history.replaceState("", "", '/Commesse');
    })
    this.aziendaService.getCredentials().subscribe((data) => {
      console.log(data.abilitato);
      if (data.nome_tipo_account == 'administrator') {
        this.permissions = true;
      } else {
        this.permissions = false;
      }
    })

  }

  deleteCommessa(id: any){
    console.log(id)
    this.clientiService.deleteLinkCommessa(id).pipe(concatMap(() => 
    this.clientiService.deleteCommessa(id))).subscribe()
  }

}
