import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/admin/home/home.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { RegisterComponent } from 'src/auth/register/register.component';
import { RouteGuard } from 'src/route.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
      { path:'auth/login', component: LoginComponent},
      { path:'auth/register', component: RegisterComponent},
      { path:'home', component: HomeComponent, canActivate: [RouteGuard]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
