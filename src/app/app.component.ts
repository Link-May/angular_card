import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'business-card-app';

  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  website: string;

  constructor(public http: HttpClient) {
    this.name = '';
    this.jobTitle = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.website = '';
  }

  submitForm() {
    console.log("Name: " + this.name);
    console.log("Job Title: " + this.jobTitle);
    console.log("Email: " + this.email);
    console.log("Phone: " + this.phone);
    console.log("Address: " + this.address);
    console.log("Website: " + this.website);

    const formData = {
      name: this.name,
      jobTitle: this.jobTitle,
      email: this.email,
      phone: this.phone,
      address: this.address,
      website: this.website
    };

    this.http.post('http://localhost:3000/api/business-card', formData)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
