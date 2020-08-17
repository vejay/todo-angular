import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
    console.log('username: ' + this.userService.username)
  }

  signOut(): void {
    console.log('sign out');
    this.router.navigate(['/']);
  }

}
