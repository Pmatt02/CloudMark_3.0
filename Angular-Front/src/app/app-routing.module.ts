import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AziendaDetailsComponent } from './AziendaEnviroments/azienda-details/azienda-details.component';
import { AziendaComponent } from './AziendaEnviroments/azienda/azienda.component';
import { HomeComponent } from './home/home.component';
import { AddAziendaComponent } from './AziendaEnviroments/add-azienda/add-azienda.component';
import { UpdateAziendaComponent } from './AziendaEnviroments/update-azienda/update-azienda.component';
import { AddDipendenteComponent } from './DipendenteEnviroments/add-dipendente/add-dipendente.component';
import { AddClienteComponent } from './ClienteEnviroments/add-cliente/add-cliente.component';
import { UpdateDipendenteComponent } from './DipendenteEnviroments/update-dipendente/update-dipendente.component';
import { UpdateClienteComponent } from './ClienteEnviroments/update-cliente/update-cliente.component';
import { ClientiDetailsComponent } from './ClienteEnviroments/clienti-details/clienti-details.component';
import { CommesseComponent } from './ClienteEnviroments/commesse/commesse.component';
import { CommessaUpdateComponent } from './ClienteEnviroments/commessa-update/commessa-update.component';
import { AddCommessaComponent } from './ClienteEnviroments/add-commessa/add-commessa.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aziendaDetails/:id', component: AziendaDetailsComponent},
  {path: 'aziendaUpdate/:id', component: UpdateAziendaComponent},
  {path: 'dipendenteUpdate/:id', component: UpdateDipendenteComponent},
  {path: 'addAzienda', component: AddAziendaComponent},
  {path: 'addDipendente/:id', component: AddDipendenteComponent},
  {path: 'addCliente/:id', component: AddClienteComponent},
  {path: 'updateCliente/:id', component: UpdateClienteComponent},
  {path: 'detailsCliente/:id', component: ClientiDetailsComponent},
  {path: 'azienda', component: AziendaComponent},
  {path: 'clienteCommessa/:id', component: CommesseComponent},
  {path: 'admin', component: AdminpanelComponent},
  {path: 'commessaUpdate/:id', component: CommessaUpdateComponent},
  {path: 'commessaAdd/:id', component: AddCommessaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
