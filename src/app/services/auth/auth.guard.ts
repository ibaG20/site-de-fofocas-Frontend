
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from '../../models/usuario/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateAdmin(): boolean {
    if (this.authService.isLoggedIn() && this.authService.getUserRole() === Role.Admin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  

}
/* import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
 */