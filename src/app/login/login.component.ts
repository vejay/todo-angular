import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('login called ');
    alert('Login called');
  }
}
