import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CursosRoutingModule
  ],
  providers: [CursosService],
})
export class CursosModule {}
