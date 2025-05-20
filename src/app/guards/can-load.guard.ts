import { CanMatchFn } from '@angular/router';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  return true;
};
