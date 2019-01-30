import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'edit-modal-content',
    template: 'edit-modal.html',
})
export class EditModalContent {
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'edit-modal-config',
  template: 'edit-modal.html',
  providers: [NgbModalConfig, NgbModal]
  
})
export class EditModal {
  constructor(public config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    }
    open() {
        this.modalService.open(EditModalContent);
    }
}

