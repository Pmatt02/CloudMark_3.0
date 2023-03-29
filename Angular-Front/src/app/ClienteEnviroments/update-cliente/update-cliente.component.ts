import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css'],
})
export class UpdateClienteComponent implements OnInit {
  clienteID: any;
  cliente!: Observable<Cliente>;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.clienteID = this.route.snapshot.paramMap.get('id');
      this.cliente = this.clienteService.getCustomersById(this.clienteID);
      window.history.replaceState("", "", '/ModificaCliente');
    });
  }

  modificaCliente(cliente: Cliente) {
    console.log(cliente);
    this.clienteService.updateCliente(cliente).subscribe((res: any) => {
      console.log(res);
    });
    this.router.navigate(['/']);
  }
}
