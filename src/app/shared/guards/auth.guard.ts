import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  // if(localStorage.getItem('token')){
    return inject(UserService).isLoggedIn() ? 
      true 
      : inject(Router).createUrlTree(['/login']);
  // }
};
