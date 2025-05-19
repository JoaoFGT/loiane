import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export const alunosGuard: CanActivateChildFn  = (route, state) => {
  // if (state.url.includes('editar')) {
  //   alert('Usuário sem acesso')
  //   return false;
  // }

  return true;
};
