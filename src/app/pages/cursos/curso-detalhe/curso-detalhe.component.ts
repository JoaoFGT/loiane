import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  template: `
  <p>
    Id: {{ id }}
  </p>
  <p>
    Curso: {{ curso?.nome }}
  </p>
  `,
  styles: ``
})
export class CursoDetalheComponent {

  id: number = 0;
  curso: any;

  inscricao: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(it => {
      this.id = it['id'];

      this.curso = this.cursosService.getCurso(it['id']);

      if (this.curso == null) {
        this.router.navigate(['/cursos/not-found']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

}
