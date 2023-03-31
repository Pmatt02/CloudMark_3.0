import { Component, OnInit } from '@angular/core';
import { AziendaService } from '../services/azienda.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Account } from '../modules/account';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit{

  accounts$!: Observable<Account[]>;
  constructor(private aziendaService: AziendaService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.aziendaService.getUser().subscribe((data)=>{console.log(data)});
    this.accounts$=this.aziendaService.getAccount()
    }
  modify(value: any, id: any){
    console.log(value, id)
    this.aziendaService.updateUser(value, id).subscribe((res)=>{
      console.log(res);
      
    })

  }
}

