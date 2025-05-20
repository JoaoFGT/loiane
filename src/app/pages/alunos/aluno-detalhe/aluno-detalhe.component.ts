import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styles: ``,
})
export class AlunoDetalheComponent implements OnInit {
  aluno: Aluno | null = null;
  alunosSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    /*
    this.alunosSubscription = this.route.params.subscribe(
      params => {
        let id = params['id']
        this.aluno = this.alunosService.getAluno(id);
      }
    );
    */
    this.alunosSubscription = this.route.data.subscribe((info) => {
      this.aluno = info['aluno'];
    });
  }

  ngOnDestroy() {
    this.alunosSubscription?.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno?.id ?? 0, 'editar']);
  }
}
