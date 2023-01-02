import { Component } from '@angular/core';
import { IMember } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public firstname: any;
  public lastname: any;
  public dateofbirth: any;
  public PhoneNumber: any;
  public Email: any;
  public BankAccountNumber: any;
  public members: IMember[] = [];

  public addTask() {
    let member = {
      firstname: this.firstname,
      lastname: this.lastname,
      dateofbirth: this.dateofbirth,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
      BankAccountNumber: this.BankAccountNumber,
    };
    this.members.push(member);
  }
}
