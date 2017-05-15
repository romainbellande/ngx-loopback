import { Component, OnInit } from '@angular/core';

import { UserService } from '../../loopback/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.login({
      username: 'admin',
      password: 'admin'
    }).subscribe(res => {
      this.userService.logout().subscribe();
    });
  }
}
