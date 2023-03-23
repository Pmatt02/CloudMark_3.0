import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AziendaService } from '../../services/azienda.service';
import { AziendaComponent } from '../azienda/azienda.component';
import { Azienda } from '../../modules/azienda';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-azienda-details',
  templateUrl: './azienda-details.component.html',
  styleUrls: ['./azienda-details.component.css']
})
export class AziendaDetailsComponent implements OnInit{
  azienda$!: Observable<Azienda>;
  @Input() aziendaId!: any;
  

  constructor(private router: ActivatedRoute, private aziendaService: AziendaService){

  }
  ngOnInit(): void {
    console.log(this.azienda$);
    this.router.paramMap.subscribe((param: ParamMap) => {
    this.aziendaId = this.router.snapshot.paramMap.get('id');
    this.azienda$ = this.aziendaService.getCompanyById(param.get('id')!);
    })

  }
  deleteAzienda(id: string){
      console.log(id)
      return this.aziendaService.deleteCompany(id).subscribe((res)=>{console.log(res)})
  }
}
