import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import iziToast from 'izitoast';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss']
})
export class ContactFormModalComponent {

  @ViewChild('content', { static: true }) content!: TemplateRef<any>; // Riferimento al template del modale

  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.currentRoute = event.url;
      }
    });
  }
  closeResult = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['openModal']) {
this.open();
      }
    });
  }
  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
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
        iziToast.success({
          timeout:1500,
          title:"Success",
          message: "Email inviata con successo!",
          position: 'center'
        });
        this.modalService.dismissAll();
      }, (error) => {
        console.log(error.text);
        iziToast.error({
          timeout:1500,
          title:"Error",
          message: "Errore durante l'invio dell'email.",
          position: 'center'
        });
      });
  }
}
