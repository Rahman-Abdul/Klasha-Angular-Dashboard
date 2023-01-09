import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
@NgModule({
imports: [CommonModule, MatIconModule ],
exports: [ MatIconModule],
providers: [MatIconRegistry] })
export class MaterialModule {}
