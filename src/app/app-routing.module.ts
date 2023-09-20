import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './shared/guards/auth.guard';
import { UserProfileComponent } from './shared/components/user.profile/user.profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'home', redirectTo:'', pathMatch:'full'},
  {path: 'login', redirectTo:'', pathMatch:'full'},
  {path: ':id', component: MainComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
