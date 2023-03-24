import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AziendaComponent } from './AziendaEnviroments/azienda/azienda.component';
import { AziendaDetailsComponent } from './AziendaEnviroments/azienda-details/azienda-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddAziendaComponent } from './AziendaEnviroments/add-azienda/add-azienda.component';
import { FormsModule } from '@angular/forms';
import { UpdateAziendaComponent } from './AziendaEnviroments/update-azienda/update-azienda.component';
import { DipendenteComponent } from './DipendenteEnviroments/dipendente/dipendente.component';
import { AddDipendenteComponent } from './DipendenteEnviroments/add-dipendente/add-dipendente.component';
import { ClienteComponent } from './ClienteEnviroments/cliente/cliente.component';
import { AddClienteComponent } from './ClienteEnviroments/add-cliente/add-cliente.component';
import { UpdateDipendenteComponent } from './DipendenteEnviroments/update-dipendente/update-dipendente.component';
import { UpdateClienteComponent } from './ClienteEnviroments/update-cliente/update-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    AziendaComponent,
    AziendaDetailsComponent,
    HomeComponent,
    AddAziendaComponent,
    UpdateAziendaComponent,
    DipendenteComponent,
    AddDipendenteComponent,
    ClienteComponent,
    AddClienteComponent,
    UpdateDipendenteComponent,
    UpdateClienteComponent
    ],
  imports: [
    BrowserModule , HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
