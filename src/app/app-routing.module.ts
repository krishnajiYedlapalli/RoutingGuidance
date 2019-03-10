import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalkingtreeComponent } from './walkingtree/walkingtree.component';
import { OtherCompaniesComponent } from './other-companies/other-companies.component';
import { EmployesComponent } from './employes/employes.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path: 'walkingtree', component: WalkingtreeComponent ,
children:[
  {path:'employes', component:EmployesComponent}
]},
  {path:'othercompanies', component:OtherCompaniesComponent,
  children:[
    { path:'othercompanyemployes', component:EmployesComponent,
      children:[
      {  path: 'authorizedCompany', component:OtherCompaniesComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [
  WalkingtreeComponent,
  OtherCompaniesComponent,
  EmployesComponent,
  DetailsComponent];
