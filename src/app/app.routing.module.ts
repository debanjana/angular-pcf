import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/company',
    pathMatch: 'full'
  },
  {
      path: 'details/:id',
      component: CompanyDetailsComponent
  },
  {
    path: 'company',
    component: CompanyComponent
}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
