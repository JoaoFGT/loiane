import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'Angular 2'},
      { id: 2, nome: 'Java'},
    ]
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    let cursoAchado = null;

    cursos.forEach(curso => {
      if (curso.id == id) cursoAchado = curso;
    })

    return cursoAchado;
  }

  constructor() { }
}
