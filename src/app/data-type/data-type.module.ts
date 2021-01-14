import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewComponent } from './data-view/data-view.component';



@NgModule({
  declarations: [
    DataViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataTypeModule {}
