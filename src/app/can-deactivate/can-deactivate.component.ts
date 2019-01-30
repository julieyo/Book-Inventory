import {HostListener} from "@angular/core";

export abstract class CanDeactivateComponent {
 
  abstract  canDeactivate(): boolean;



    @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
        if (!this.canDeactivate()) {
            $event.returnValue =true;
        }
    }
}