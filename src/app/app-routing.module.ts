import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
