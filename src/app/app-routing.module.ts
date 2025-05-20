import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { alunosGuard } from './guards/alunos.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    canMatch: [authGuard],
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((mod) => mod.CursosModule),
  },
  {
    path: 'alunos',
    canMatch: [authGuard],
    //canActivateChild: [alunosGuard],
    loadChildren: () =>
      import('./pages/alunos/alunos.module').then((mod) => mod.AlunosModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
