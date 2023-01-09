import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

@NgModule({
imports: [ MatIconModule ],
exports: [ CommonModule, MatIconModule],
providers: [MatIconRegistry] })
export class MaterialModule {}
