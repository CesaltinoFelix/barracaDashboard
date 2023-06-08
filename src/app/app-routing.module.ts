import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './rotas/cliente/cliente.component';
import { HomeComponent } from './rotas/home/home.component';
import { TabelaComponent } from './rotas/tabela/tabela.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent}
  ,{path:'cliente',
   component:ClienteComponent }
   ,
   {
    path:'tabela',
    component:TabelaComponent
   }
   ,
   {
    path:'home',
    component:HomeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
