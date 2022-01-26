import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveResellersComponent } from './approve-resellers/approve-resellers.component';
import { ManageResellersComponent } from './manage-resellers/manage-resellers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ApproveResellers', component: ApproveResellersComponent },
      { path: 'ManageResellers' , component : ManageResellersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
