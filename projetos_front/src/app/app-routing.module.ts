import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { NovoProjetoComponent } from './pages/novo-projeto/novo-projeto.component';
import { UpdateProjetoComponent } from './pages/update-projeto/update-projeto.component';

export const RoutePaths = {
  Projetos: 'projetos',
  NovoProjeto: 'novo-projeto',
  UpdateProjeto: 'projetos/:id'
}

const routes: Routes = [
  { path: '', redirectTo: RoutePaths.Projetos, pathMatch: 'full' },
  { path: RoutePaths.Projetos, component: ProjetosComponent },
  { path: RoutePaths.NovoProjeto, component: NovoProjetoComponent },
  { path: RoutePaths.UpdateProjeto, component: UpdateProjetoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
