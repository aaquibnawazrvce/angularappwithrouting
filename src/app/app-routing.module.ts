import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproducttypeComponent } from './addproducttype/addproducttype.component';
import { NotconfiguredComponent } from './notconfigured/notconfigured.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { ViewproducttypeComponent } from './viewproducttype/viewproducttype.component';
import { ViewproducttypedetailComponent } from './viewproducttypedetail/viewproducttypedetail.component';
/*
const routes: Routes = [
  {path: 'addptype', component: AddproducttypeComponent},
  {path: 'viewptype', component: ViewproducttypeComponent}
];*/

// Add this For Wild Card
/*const routes: Routes = [
  {path: 'addptype', component: AddproducttypeComponent},
  {path: 'viewptype', component: ViewproducttypeComponent},
  {path: '**', component: NotconfiguredComponent}
];*/

// Add  showing Non Configured Routing
/*const routes: Routes = [
  {path: '', redirectTo: '/addptype', pathMatch: 'full'},
  {path: 'addptype', component: AddproducttypeComponent},
  {path: 'viewptype', component: ViewproducttypeComponent},
  {path: '**', component: NotconfiguredComponent}
];*/

// Add this after default Route
/*const routes: Routes = [
  {path: '', redirectTo: '/addptype', pathMatch: 'full'},
  {path: 'addptype', component: AddproducttypeComponent},
  {path: 'viewptype', component: ViewproducttypeComponent},
  {path: 'viewptype/:id', component: ViewproducttypedetailComponent},
  {path: '**', component: NotconfiguredComponent}
];*/

// Adding for Forms
const routes: Routes = [
  {path: '', redirectTo: '/addptype', pathMatch: 'full'},
  {path: 'addptype', component: AddproducttypeComponent},
  {path: 'viewptype', component: ViewproducttypeComponent},
  {path: 'viewptype/:id', component: ViewproducttypedetailComponent},
  {path: '**', component: NotconfiguredComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*  First basic routing use this
export const routingCmpArray = [AddproducttypeComponent,
   ViewproducttypeComponent];*/
/* Second for Not Configured route use this
   export const routingCmpArray = [AddproducttypeComponent,
    ViewproducttypeComponent, NotconfiguredComponent];
    */
  /*  Thrid example
export const routingCmpArray = [AddproducttypeComponent, ViewproducttypeComponent,
   NotconfiguredComponent, ViewproducttypedetailComponent];*/

   /* Fourth Example  --- From this onwards start concepts on Form */
export const routingCmpArray = [AddproducttypeComponent, ViewproducttypeComponent,
    NotconfiguredComponent, ViewproducttypedetailComponent, ProducttypeComponent];
