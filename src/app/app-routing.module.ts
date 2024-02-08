import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: '', component: MasterPageComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'crud', component: CrudComponent },
    { path: '', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
