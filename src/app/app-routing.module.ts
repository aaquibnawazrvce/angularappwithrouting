import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproducttypeComponent } from './addproducttype/addproducttype.component';
import { NotconfiguredComponent } from './notconfigured/notconfigured.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { ViewproducttypeComponent } from './viewproducttype/viewproducttype.component';

const routes: Routes = [
  {path: '', redirectTo: '/addptype', pathMatch: 'full'},
  {path: 'addptype', component: AddproducttypeComponent},
  {path: 'viewptype', component: ViewproducttypeComponent}
  {path: '**', component: NotconfiguredComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingCmpArray = [AddproducttypeComponent, ViewproducttypeComponent,
   NotconfiguredComponent, ViewproducttypedetailComponent];
