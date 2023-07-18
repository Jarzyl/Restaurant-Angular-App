import { Component } from '@angular/core';
import { ContactForm } from 'src/types/contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  isFormSubmitted = false;
  isFormInvalid = false;
  invalidFields: string[] = [];

  contactForm: ContactForm = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  onSubmit(): void {
    this.invalidFields = [];

    // Fields check
    if (!this.contactForm.name) {
      this.invalidFields.push('name');
    }
    if (!this.contactForm.subject) {
      this.invalidFields.push('subject');
    }
    if (!this.contactForm.email) {
      this.invalidFields.push('email');
    }
    if (!this.contactForm.message) {
      this.invalidFields.push('message');
    }

    // Empty fields => show Error
    if (this.invalidFields.length > 0) {
      this.isFormInvalid = true;
      setTimeout(() => {
        this.isFormInvalid = false;
      }, 3000);
      return;
    }

    // Clear after message send
    this.contactForm = {
      name: '',
      subject: '',
      email: '',
      message: '',
    };

    this.isFormSubmitted = true;

    setTimeout(() => {
      this.isFormSubmitted = false;
    }, 2000);
  }
}
