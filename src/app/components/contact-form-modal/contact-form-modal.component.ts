import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'; // Aggiungi emailjs-com

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss']
})
export class ContactFormModalComponent {

  private modalService = inject(NgbModal);
  closeResult = '';

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  // Funzione per inviare l'email
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_5ly09eb', 'template_l8hpntx', e.target as HTMLFormElement, 'rQpV_HeC9usBUqZY0')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email inviata con successo!');
      }, (error) => {
        console.log(error.text);
        alert('Errore durante l\'invio dell\'email.');
      });
  }
}
