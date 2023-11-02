import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatPaginatorModule,
    MatProgressBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatBadgeModule
  ]
})
export class MaterialUIModule { }
