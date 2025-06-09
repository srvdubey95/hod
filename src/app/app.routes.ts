// app.routes.ts
import { Routes } from '@angular/router';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponentComponent },
  { path: 'signup', component: SignUpComponent }
];
