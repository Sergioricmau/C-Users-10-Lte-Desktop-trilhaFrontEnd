import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';


const routes: Routes = [
  { path: 'lista', component: ListaNumerosComponent},
  { path: 'quadrado', component: QuadradoComponent },
  { path: 'cubo', component: CuboComponent },
  { path: 'pipe', component: TestesPipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
