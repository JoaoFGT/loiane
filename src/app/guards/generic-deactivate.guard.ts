import { CanDeactivateFn } from '@angular/router';
import { CanFormDeactivate } from './CanFormDeactivate';

export const genericDeactivateGuard: CanDeactivateFn<CanFormDeactivate> = (component, currentRoute, currentState, nextState) => {
  return component.podeDesativar();
};
