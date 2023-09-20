import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { UserLogInModel } from '../model/user.model';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "user";
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  public postEmployee(employee: UserLogInModel): Observable<UserLogInModel[]>{
    return this.http.post<UserLogInModel[]>(`${environment.apiUrl}/${this.url}/login`, employee);
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')?.length ? true : false;
  }

}
