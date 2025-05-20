import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { alunosDeactivateGuard } from '../../guards/alunos-deactivate.guard';
import { alunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent,
      },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: alunoDetalheResolver }
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        canDeactivate: [alunosDeactivateGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
