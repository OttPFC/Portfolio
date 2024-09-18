import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isCollapsed = true;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send('service_5ly09eb', 'YOUR_TEMPLATE_ID', this.formData, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email inviata con successo!');
      }, (error) => {
        console.log(error.text);
        alert('Errore durante l\'invio dell\'email');
      });
  }
  
}
