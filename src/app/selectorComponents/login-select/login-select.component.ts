import { Component } from '@angular/core';

@Component({
  selector: 'app-login-select',
  template: `<button mat-button [matMenuTriggerFor]="menu"><mat-icon svgIcon="person"></mat-icon> <mat-icon svgIcon="drop-down"></mat-icon></button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item>Log out</button>
  </mat-menu>`,
  styleUrls: ['./login-select.component.scss']
})
export class LoginSelectComponent {

}
