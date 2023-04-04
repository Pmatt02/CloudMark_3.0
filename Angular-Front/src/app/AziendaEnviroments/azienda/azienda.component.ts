import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { DipendenteResult } from 'src/app/modules/dipendente-result';
import { ClienteService } from 'src/app/services/cliente.service';
import { AziendaService } from '../../services/azienda.service';
import { NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({

  selector: 'app-azienda',
  templateUrl: './azienda.component.html',
  styleUrls: ['./azienda.component.css'],

})

export class AziendaComponent implements OnInit{

  ngOnInit(): void {
    window.history.replaceState("", "", '/Aziende');
    this.aziendaService.getCredentials().subscribe((data) => {
      console.log(data.abilitato);
      if (data.nome_tipo_account == 'administrator') {
        this.permissions = true;
      } else {
        this.permissions = false;
      }
      if (data.abilitato == 1){
        console.log('tutto ok');
        
      } else {
        alert('Non sei abilitato')
        location.replace('http://localhost:3000/login');
      
      }
    })
  }

  aziende = this.aziendaService.getAllCompanies();
  image =
    'data:image/png;base64,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';

  constructor(private modalService: NgbModal, private aziendaService: AziendaService, private clienteService: ClienteService ,private router: Router) {}
  
  is_display: boolean = false;
  is_display2: boolean = false;
  errore: boolean = false;
  errore2: boolean = false;
  elemento!: string | number;
  dipendente!: string | number;
  dipendente$!: Observable<DipendenteResult[]>;
  cliente$!: Observable<Cliente[]>;
  array: any[]=[''];
  lunghezza!: number;
  dipendentidisplay: boolean = true;
  clientidisplay: boolean = false;
  permissions: boolean = false;



  searchDipendente(dipendente: HTMLInputElement) {
    if (dipendente.value) {
      this.dipendente$ = this.aziendaService.ricercaDipendente(
        dipendente.value
      );
      this.aziendaService
        .ricercaDipendente(dipendente.value)
        .subscribe((res) => {
          this.array.push(res);
          this.lunghezza = this.array[this.array.length - 1].length;
          console.log(this.lunghezza); //lunghezza dell'ultimo elemento dell'array di oggetti this.array[this.array.length - 1].length;

          if (this.lunghezza == 0) {
            this.is_display = false;
            this.errore=true;
            console.log(this.is_display);
          } else {
            this.errore=false;
            this.is_display = true;
          }
        });
    } else {
      this.errore=false;
      this.is_display = false;
    }
  }

  searchCliente(cliente: HTMLInputElement) {
    if (cliente.value) {
      this.cliente$ = this.clienteService.ricercaCliente(
        cliente.value
      );
      this.clienteService
        .ricercaCliente(cliente.value)
        .subscribe((res) => {
          this.array.push(res);
          this.lunghezza = this.array[this.array.length - 1].length;
          console.log(this.lunghezza); //lunghezza dell'ultimo elemento dell'array di oggetti this.array[this.array.length - 1].length;

          if (this.lunghezza == 0) {
            this.is_display2 = false;
            this.errore2=true;
            console.log(this.is_display2);
          } else {
            this.errore2=false;
            this.is_display2 = true;
          }
        });
    } else {
      this.errore2=false;
      this.is_display2 = false;
    }
  }

  chiudi(){
    this.errore=false;
    this.errore2=false;
  }
  
  showDipendente(){
    this.dipendentidisplay=true;
    this.clientidisplay=false;
  }

  showClienti(){
    this.dipendentidisplay=false;
    this.clientidisplay=true;
  }

  openModal(content:any) {
    
    const ModalOptions: NgbModalOptions = {
      backdrop: true,
      keyboard: true,
      windowClass: 'custom-modal',
      size: 'lg'
    }

    this.modalService.open(content, ModalOptions)

  }

}
