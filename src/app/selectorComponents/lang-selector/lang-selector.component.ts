import { Component } from '@angular/core';


@Component({
  selector: 'app-lang-selector',
  template: `<button mat-button [matMenuTriggerFor]="menu"><mat-icon svgIcon="heading"></mat-icon>
    <mat-icon svgIcon="drop-down"></mat-icon></button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item>Fr</button>
    <button mat-menu-item>Esp</button>
  </mat-menu>`,
  styleUrls: ['./lang-selector.component.scss']
})


export class LangSelectorComponent {


}
