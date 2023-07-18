import { Component } from '@angular/core';
import { Reservation } from 'src/types/reservation';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss'],
})
export class ReservationPageComponent {
  isReservationSubmitted = false;
  isFormInvalid = false;
  invalidFields: string[] = [];

  reservation: Reservation = {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    numberOfPeople: 1,
  };

  onSubmit(): void {
    this.invalidFields = [];

    // Fields check
    if (!this.reservation.firstName) {
      this.invalidFields.push('firstName');
    }
    if (!this.reservation.lastName) {
      this.invalidFields.push('lastName');
    }
    if (!this.reservation.date) {
      this.invalidFields.push('date');
    }
    if (!this.reservation.time) {
      this.invalidFields.push('time');
    }
    if (!this.reservation.numberOfPeople) {
      this.invalidFields.push('numberOfPeople');
    }

    // Empty fields => show Error
    if (this.invalidFields.length > 0) {
      this.isFormInvalid = true;
      setTimeout(() => {
        this.isFormInvalid = false;
      }, 3000);
      return;
    }

    // TO DO
    // Connect with database and post request
    console.log(this.reservation);

    // Clear after reservation made
    this.reservation = {
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      numberOfPeople: 1,
    };

    this.isReservationSubmitted = true;

    setTimeout(() => {
      this.isReservationSubmitted = false;
    }, 2000);
  }
}
