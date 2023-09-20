import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { UserLogInModel } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "auth";
  private userData: any;
  private _id: string | undefined;
  constructor(private http: HttpClient) { }
  public postEmployee(employee: UserLogInModel): Observable<UserLogInModel[]>{
    return this.http.post<UserLogInModel[]>(`${environment.apiUrl}/${this.url}/login`, employee);
  }
  public setUserData(data: JSON){
    this.userData = data;
    this._id = JSON.parse(JSON.stringify(data))._id;
  }
}
