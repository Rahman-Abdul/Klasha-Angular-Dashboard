import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import {MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [ CommonModule, MatIconModule, MaterialModule ],
  exports: [MatIconModule],
  providers: [MatIconRegistry]

})
export class IconModule {
  private path: string = "/src/assets/icons/klashlogo1.svg";
 constructor(
  private domSanitizer: DomSanitizer,
  public matIconRegistry: MatIconRegistry ) {
  this.matIconRegistry
  .addSvgIcon("home", this.setPath(`${this.path}/klashalogo1.svg`))
  .addSvgIcon("add", this.setPath(`${this.path}/file-plus.svg`));
 }
 private setPath(url: string): SafeResourceUrl {
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
 }
 }
