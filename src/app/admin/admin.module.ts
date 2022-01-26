import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageResellersComponent } from './manage-resellers/manage-resellers.component';
import { ApproveResellersComponent } from './approve-resellers/approve-resellers.component';



@NgModule({
  declarations: [
    ManageResellersComponent,
    ApproveResellersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
