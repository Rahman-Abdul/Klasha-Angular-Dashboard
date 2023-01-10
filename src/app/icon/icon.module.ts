import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { MaterialModule } from '../Shared/material/material.module';
import { MatIconRegistry } from "@angular/material/icon";
@NgModule({
imports: [CommonModule, MaterialModule]})
export class IconModule {
private path: string = "../../assets/iconss";
 constructor(
  private domSanitizer: DomSanitizer,
  public matIconRegistry: MatIconRegistry ) {
  this.matIconRegistry
  .addSvgIcon("Klasha-logo", this.setPath(`${this.path}/klashalogo1.svg`))
  .addSvgIcon("pie-chart-logo", this.setPath(`${this.path}/pie-chart.svg`))
  .addSvgIcon("wallet-logo", this.setPath(`${this.path}/wallet.svg`))
  .addSvgIcon("payments-logo", this.setPath(`${this.path}/payments.svg`))
  .addSvgIcon("chart-logo", this.setPath(`${this.path}/chart.svg`))
  .addSvgIcon("radar-logo", this.setPath(`${this.path}/radar.svg`))
  .addSvgIcon("exchange-logo", this.setPath(`${this.path}/exchange.svg`))
  .addSvgIcon("shopping-cart-logo", this.setPath(`${this.path}/shopping-cart.svg`))
  .addSvgIcon("payment-link-logo", this.setPath(`${this.path}/payment-link.svg`))
  .addSvgIcon("transactions-logo", this.setPath(`${this.path}/transactions.svg`))
   .addSvgIcon("help", this.setPath(`${this.path}/help.svg`))
   .addSvgIcon("left-arrow", this.setPath(`${this.path}/left-arrow.svg`));
 }
 private setPath(url: string): SafeResourceUrl {
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
 }
}
