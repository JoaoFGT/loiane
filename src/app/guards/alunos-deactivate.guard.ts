import { CanDeactivateFn } from '@angular/router';
import { AlunoFormComponent } from '../pages/alunos/aluno-form/aluno-form.component';

export const alunosDeactivateGuard: CanDeactivateFn<AlunoFormComponent> = (component, currentRoute, currentState, nextState) => {
  return component.podeMudarRota();
};
