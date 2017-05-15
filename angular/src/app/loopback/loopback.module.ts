import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AuthenticationService,
  UserService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class LoopbackModule { }
