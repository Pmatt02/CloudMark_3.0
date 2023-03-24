import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clienti-details',
  templateUrl: './clienti-details.component.html',
  styleUrls: ['./clienti-details.component.css']
})
export class ClientiDetailsComponent {
  Clienti$!: Observable<Cliente>;
  clienteId!: any;
  constructor(private router: ActivatedRoute, private clientiService: ClienteService){

  }
  ngOnInit(): void {
    console.log(this.Clienti$);
    this.router.paramMap.subscribe((param: ParamMap) => {
    this.clienteId = this.router.snapshot.paramMap.get('id');
    this.Clienti$ = this.clientiService.getCustomersById(param.get('id')!);
    })

  }

}
