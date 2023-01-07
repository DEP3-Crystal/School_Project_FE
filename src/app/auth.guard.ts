import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userLoggedIn = false;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userLoggedIn) {
// if (localStorage.getItem('currentUserEmail')) {
// logged in so return true
      return true;
    }
// not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}


