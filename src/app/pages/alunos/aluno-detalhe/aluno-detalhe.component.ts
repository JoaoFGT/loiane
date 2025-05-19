import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styles: ``
})
export class AlunoDetalheComponent implements OnInit{


aluno: any;
alunosSubscription: Subscription | undefined;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private alunosService: AlunosService
) { }

ngOnInit() {
    this.alunosSubscription = this.route.params.subscribe(
      params => {
        let id = params['id']
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.alunosSubscription?.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
