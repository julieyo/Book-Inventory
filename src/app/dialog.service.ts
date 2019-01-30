import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(message?: string): Observable<boolean> {
    //TODO: better modal (use popup outlet on app-component)
    const confirmation = window.confirm(message || 'Ok to leave page without saving?');
    return of(confirmation);
  };
}
