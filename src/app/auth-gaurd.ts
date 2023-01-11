import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from "./services/user-service";
import {Role} from "./model/enum/role";
import { toRole } from './model/enum/enumImplicits';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.userService.isLoggedIn()) {
      // Store the attempted URL for redirecting
      this.userService.redirectUrl = state.url;
      this.router.navigate(['/unauthorized']);
      return false;
    }
    // Get the user's role from the UserService
    const userRole: Role | undefined = this.userService.getUserRole();

    if(userRole === undefined) { return false; }
    console.log('user role is: ' + toRole(userRole))
    console.log('accessible only from: '  )
    console.log(route.data)
    // Check if the user has the necessary privileges to access the route
    // Check if the user has the necessary privileges to access the route
    
    if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
      // User does not have the necessary privileges
      this.router.navigate(['/unauthorized']); // or display an error message
      return false;
    }

    return true;
  }
}
