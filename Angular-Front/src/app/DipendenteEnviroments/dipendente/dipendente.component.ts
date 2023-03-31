import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as Papa from 'papaparse';
import { Observable } from 'rxjs';
import { Dipendente } from 'src/app/modules/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';
import {saveAs} from 'file-saver';
import { AziendaService } from 'src/app/services/azienda.service';

@Component({
  selector: 'app-dipendente',
  templateUrl: './dipendente.component.html',
  styleUrls: ['./dipendente.component.css']
})
export class DipendenteComponent implements OnInit{
  dipendente$!: Observable<Dipendente[]>;
  dipendenteId!: any;
  @Input() idaz: any;
  permissions: boolean= false;

  constructor(private router: ActivatedRoute, private servizioDipendente: DipendenteService, private aziendaService: AziendaService) {};

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      this.dipendenteId = this.router.snapshot.paramMap.get('id');
      this.dipendente$ = this.servizioDipendente.getEmployeesByIdAzienda(this.dipendenteId)
//      window.history.replaceState("", "", '/Dipendenti');
    })
    this.aziendaService.getCredentials().subscribe((data) => {
      console.log(data.abilitato);
      if (data.nome_tipo_account == 'administrator') {
        this.permissions = true;
      } else {
        this.permissions = false;
      }
    })
    console.log(this.dipendente$);

  }

  deleteEmployee(id_dipendente: string, id_azienda: string) {
    this.servizioDipendente.deleteEmployee(id_dipendente).subscribe((res)=>{console.log(res)})
    this.servizioDipendente.deleteLink(id_dipendente, id_azienda).subscribe((res)=>{console.log(res)})
    console.log(id_azienda, id_dipendente)

  }

  downloadFile() {
    this.servizioDipendente.getEmployeesByIdAzienda(this.dipendenteId).subscribe((data: Dipendente[]) => {
      const csvData = Papa.unparse(data);
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'file.csv');
    })
  }
}
