import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {GrantAccessService} from '../services/grant-access.service';

export const accessGuardGuard: CanActivateFn = (route, state) => {
  const grantAccess = inject(GrantAccessService)
  const router = inject(Router)

  if(grantAccess.access){
    return true
  }else {
    router.navigate([''])
    return false
  }
};
