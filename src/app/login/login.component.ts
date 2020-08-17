import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('login called ');
    console.log(this.loginForm.value);

    if (this.loginForm.valid && this.validate()) { // TODO VKV: Make this.validate() method part of the validator.
      /*this.authService.login(this.loginForm.value).subscribe(result => {
        if(result.success) {
          console.log(result.message);
        } else {
          console.log(result.message);
        }
      }); */

      console.log('Succeeded');
      this.userService.username = this.loginForm.value.username;

      this.router.navigate(['/todo']);
    } else {
      console.log('Failed');
    }
  }

  validate(): boolean {
    if ((this.loginForm.value.username === 'akila'  && this.loginForm.value.password === 'akila')
      || (this.loginForm.value.username === 'vijay' && this.loginForm.value.password === 'vijay')) {
      return true;
    } else  {
      alert('Sorry, No Entry :(');
      return false;
    }
  }
}
