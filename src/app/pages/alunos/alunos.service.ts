import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {
      id:1, nome: 'Aluno 01', email: 'aluno01@email.com'
    },
    {
      id:2, nome: 'Aluno 02', email: 'aluno02@email.com'
    },
    {
      id:3, nome: 'Aluno 03', email: 'aluno03@email.com'
    },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number): Aluno | null {
    const alunos = this.getAlunos();
    let alunoAchado = null;

    alunos.forEach(aluno => {
      if (aluno.id == id) alunoAchado = aluno;
    })

    return alunoAchado;
  }

  constructor() { }
}
