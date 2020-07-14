import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface FormValues {
  inputIsRequired: boolean;
  input: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = new FormGroup({
    inputIsRequired: new FormControl(true),
    input: new FormControl(null, [Validators.minLength(5)])
  });

  onSubmit() {
    const values: FormValues = this.form.value;

    values.input = values.input ? values.input : null;

    console.log(values);
  }
}
