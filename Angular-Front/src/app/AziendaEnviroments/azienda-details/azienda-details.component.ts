import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AziendaService } from '../../services/azienda.service';
import { AziendaComponent } from '../azienda/azienda.component';
import { Azienda } from '../../modules/azienda';
import { Observable } from 'rxjs';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-azienda-details',
  templateUrl: './azienda-details.component.html',
  styleUrls: ['./azienda-details.component.css']
})
export class AziendaDetailsComponent implements OnInit{
  azienda$!: Observable<Azienda>;
  @Input() aziendaId!: any;
  permissions: boolean = false; 
  

  constructor(private modalService: NgbModal, private router: ActivatedRoute, private aziendaService: AziendaService){

  }
  ngOnInit(): void {
    console.log(this.azienda$);
    this.router.paramMap.subscribe((param: ParamMap) => {
    this.aziendaId = this.router.snapshot.paramMap.get('id');
    this.azienda$ = this.aziendaService.getCompanyById(param.get('id')!);
    window.history.replaceState("", "", '/DettaglioAzienda');
    this.aziendaService.getCredentials().subscribe((data) => {
      console.log(data.abilitato);
      if (data.nome_tipo_account == 'administrator') {
        this.permissions = true;
      } else {
        this.permissions = false;
      }
    })
    })

  }
  deleteAzienda(id: string){
      console.log(id)
      return this.aziendaService.deleteCompany(id).subscribe((res)=>{console.log(res)})
  }

  openModal(content:any) {

    const ModalOptions: NgbModalOptions = {
      backdrop: true,
      keyboard: true,
      //size: 'lg',
      centered: true
    }

    this.modalService.open(content, ModalOptions)

  }
}
