import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './rotas/cliente/cliente.component';
import { TabelaComponent } from './rotas/tabela/tabela.component';
import { HomeComponent } from './rotas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TabelaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
