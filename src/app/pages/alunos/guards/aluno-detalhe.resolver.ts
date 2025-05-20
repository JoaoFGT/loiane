import { ResolveFn } from '@angular/router';
import { Aluno } from '../aluno';
import { inject } from '@angular/core';
import { AlunosService } from '../alunos.service';

export const alunoDetalheResolver: ResolveFn<Aluno | null> = (route, state) => {
  const id = route.params['id'];
  console.log('Passei pelo resolver!');
  return inject(AlunosService).getAluno(id);

};
