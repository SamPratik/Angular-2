import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'details/:id', component: EmployeeDetailComponent },
];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
export const routingComponents = [EmployeeListComponent,EmployeeDetailComponent];