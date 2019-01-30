import { Injectable } from '@angular/core';
import { CanDeactivate, 
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EditComponent} from '../edit/edit.component';

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<EditComponent> {
    canDeactivate(
        component: EditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (component.editForm.dirty || component.editForm.touched) {
            return component.canDeactivate();
        }
        return true;
    }
}

