import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dipendente } from 'src/app/modules/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-update-dipendente',
  templateUrl: './update-dipendente.component.html',
  styleUrls: ['./update-dipendente.component.css']
})
export class UpdateDipendenteComponent implements OnInit{
dipendente_Id: any;
dipendente$ !:Observable<Dipendente[]>;


constructor(private router: Router, private route: ActivatedRoute, private servizioDipendente: DipendenteService){};

ngOnInit(): void {
  this.route.paramMap.subscribe((param: ParamMap) => {
    this.dipendente_Id = this.route.snapshot.paramMap.get('id');
    this.dipendente$ = this.servizioDipendente.getEmployeeById(this.dipendente_Id)
  })
  console.log(this.dipendente$);
 }
 modificaDipendente(dipendente: Dipendente){
  console.log(dipendente)
  this.servizioDipendente.updateEmployee(dipendente).subscribe((res)=> {console.log(res)})
  this.router.navigate(['/'])
}
}

