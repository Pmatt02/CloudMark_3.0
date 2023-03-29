import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Dipendente } from 'src/app/modules/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-dipendente',
  templateUrl: './dipendente.component.html',
  styleUrls: ['./dipendente.component.css']
})
export class DipendenteComponent implements OnInit{
  dipendente$!: Observable<Dipendente[]>;
  dipendenteId!: any;
  @Input() idaz: any;

  constructor(private router: ActivatedRoute, private servizioDipendente: DipendenteService) {};

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      this.dipendenteId = this.router.snapshot.paramMap.get('id');
      this.dipendente$ = this.servizioDipendente.getEmployeesByIdAzienda(this.dipendenteId)
//      window.history.replaceState("", "", '/Dipendenti');
    })
    console.log(this.dipendente$);

  }

  deleteEmployee(id_dipendente: string, id_azienda: string) {
    this.servizioDipendente.deleteEmployee(id_dipendente).subscribe((res)=>{console.log(res)})
    this.servizioDipendente.deleteLink(id_dipendente, id_azienda).subscribe((res)=>{console.log(res)})
    console.log(id_azienda, id_dipendente)

  }
}
