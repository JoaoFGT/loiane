import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { alunosGuard } from './guards/alunos.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((mod) => mod.CursosModule),
  },
  {
    path: 'alunos',
    canActivate: [authGuard],
    //canActivateChild: [alunosGuard],
    loadChildren: () =>
      import('./pages/alunos/alunos.module').then((mod) => mod.AlunosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
