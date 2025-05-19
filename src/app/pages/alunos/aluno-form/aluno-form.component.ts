import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { CanFormDeactivate } from '../../../guards/CanFormDeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styles: ``
})
export class AlunoFormComponent implements CanFormDeactivate{
  aluno: any;
  alunosSubscription: Subscription | undefined;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.alunosSubscription = this.route.params.subscribe(
      params => {
        let id = params['id']

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null) this.aluno = {};
      }
    );
  }

  ngOnDestroy() {
    this.alunosSubscription?.unsubscribe();
  }

  onInput() {
    if (!this.formMudou) this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Quer sair mesmo, cara?')
    }
    return true;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }
}
