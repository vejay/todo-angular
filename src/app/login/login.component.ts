import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('login called ');
    console.log(this.loginForm.value);
    if(this.validate()) {
      console.log('Succeeded');
    } else {
      console.log('Failed');
    }
  }

  validate(): boolean {
    if ((this.loginForm.value.username === 'akila'  && this.loginForm.value.password === 'akila')
      || (this.loginForm.value.username === 'vijay' && this.loginForm.value.password === 'vijay')) {
      alert('Yes! You\'re In');
      return true;
    } else  {
      alert('Sorry, No Entry :(');
      return false;
    }
  }
}
