import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../pages/login/auth.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  if(inject(AuthService).isUsuarioAutenticado()) {
    return true;
  }

  inject(Router).navigate(['/login']);
  return false;
};
