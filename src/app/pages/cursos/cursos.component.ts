import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: ``,
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  pagina: number = 1;

  inscricoes: Subscription | undefined;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricoes = this.route.queryParams.subscribe((param) => {
      this.pagina = param['pagina'] ?? this.pagina;
    });
  }

  ngOnDestroy() {
    this.inscricoes?.unsubscribe();
  }

  avancarPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }

  voltarPagina() {
    if (this.pagina > 1) {
      this.router.navigate(['/cursos'], {
        queryParams: { pagina: --this.pagina },
      });
    }
  }
}
