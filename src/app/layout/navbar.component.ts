import { Component, OnInit } from '@angular/core';
import { AuthService } from '../pages/login/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="card flex justify-content-center">
      <nav class="nav flex-column bg-light p-3 vh-100">
        <input
          type="number"
          [(ngModel)]="idSelecionado"
          placeholder="> ID do curso"
        />
        <a class="nav-link active" routerLink="/">Home</a>
        <a class="nav-link" routerLink="/cursos" [queryParams]="{pagina: 1}">Cursos</a>
        <a class="nav-link" [routerLink]="['cursos', idSelecionado]">BuscarCurso</a>
        <a class="nav-link" routerLink="/alunos">Alunos</a>
        <a class="nav-link" routerLink="/login">Login</a>
      </nav>
    </div>
  `,
  styles: [``],
})
export class NavbarComponent implements OnInit {
  idSelecionado: number = 0;

  constructor() {}

  ngOnInit() {
  }
}
