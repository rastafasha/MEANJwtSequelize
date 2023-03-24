import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.serverUrl + '/test/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.serverUrl + '/test/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.serverUrl + '/test/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.serverUrl + '/test/admin', { responseType: 'text' });
  }
}
