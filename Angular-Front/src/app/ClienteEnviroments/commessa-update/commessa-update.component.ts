import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Commessa } from 'src/app/modules/commessa';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-commessa-update',
  templateUrl: './commessa-update.component.html',
  styleUrls: ['./commessa-update.component.css']
})
export class CommessaUpdateComponent implements OnInit{
  commessaID!: any;
  commessa!: Observable<Commessa>;

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.commessaID = this.route.snapshot.paramMap.get('id');
      this.commessa = this.clienteService.getCommessaById(this.commessaID);
      console.log(this.commessa)
      window.history.replaceState("", "", '/ModificaCommessa');
    })
  }

  modificaCommessa(commesse: Commessa){
    console.log(commesse)
    this.clienteService.updateCommessa(commesse).subscribe((res)=> {console.log(res)})
    // this.router.navigate(['/'])
  }
}
