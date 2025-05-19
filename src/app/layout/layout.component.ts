import { Component, OnInit } from '@angular/core';
import { AuthService } from '../pages/login/auth.service';

@Component({
  selector: 'app-layout',
  template: `
    <ng-container *ngIf="isUsuarioAutenticado; else onlyOutlet">
      <div class="row">
        <div class="col-2">
          <app-navbar></app-navbar>
        </div>
        <div class="col p-3">
          <router-outlet></router-outlet>
        </div>
      </div>
    </ng-container>

    <ng-template #onlyOutlet>
      <div class="p-4 d-flex justify-content-center vh-100">
        <router-outlet></router-outlet>
      </div>
    </ng-template>
  `,
  styles: [``]
})
export class LayoutComponent implements OnInit{

  isUsuarioAutenticado: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authEmitter.subscribe(
      isUsuarioAutenticado => {
        this.isUsuarioAutenticado = isUsuarioAutenticado
      }
    )
  }

}
