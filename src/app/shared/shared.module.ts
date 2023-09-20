import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './components/user.profile/user.profile.component';
import { UserInterceptor } from './services/user.interceptor';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserSidebarComponent } from './components/user.sidebar/user.sidebar.component';
@NgModule({
  declarations: [
    TableComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
    UserSidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    TableComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
    UserSidebarComponent,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ]  
})
export class SharedModule { }
