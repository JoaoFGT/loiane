import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../pages/login/auth.service';

// Método usando o CanMatch (mais moderno)
export const authGuard: CanMatchFn = (route, segments) => {
  if(inject(AuthService).isUsuarioAutenticado()) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
};

/* Método usando apenas o CanActivate
export const authGuard: CanActivateFn = (_route, _state) => {
  if(inject(AuthService).isUsuarioAutenticado()) {
    return true;
  }

  inject(Router).navigate(['/login']);
  return false;
};
*/
