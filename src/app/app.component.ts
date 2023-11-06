import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humanforce-login';

  submitted = false;

  // For the purpose of this test, there's no backend validation so just logging this to console instead.
  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      console.log('Form Value', form.value);
    }
  }
}
