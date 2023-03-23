import { Component, OnInit } from '@angular/core';
import { AziendaService } from '../../services/azienda.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Azienda } from '../../modules/azienda';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-azienda',
  templateUrl: './update-azienda.component.html',
  styleUrls: ['./update-azienda.component.css']
})
export class UpdateAziendaComponent implements OnInit{
  aziendaID: any;
  azienda!: Observable<Azienda>;

  constructor(private aziendaService: AziendaService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.aziendaID = this.route.snapshot.paramMap.get('id');
      this.azienda = this.aziendaService.getCompanyById(this.aziendaID);
    })
  }

  modificaAzienda(aziende: Azienda){
    console.log(aziende)
    this.aziendaService.updateCompany(aziende).subscribe((res)=> {console.log(res)})
    this.router.navigate(['/'])
  }
}
