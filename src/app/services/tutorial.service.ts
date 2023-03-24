import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.serverUrl}/tutorials/findAll`);

  }
  getPublished(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.serverUrl}/tutorials/published`);

  }
  get(id: any): Observable<Tutorial> {
    return this.http.get(`${this.serverUrl}/tutorials/findOne/${id}`);
  }


  create(data: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/tutorials/create/`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.serverUrl}/tutorials/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.serverUrl}/tutorials/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.serverUrl}/tutorials/deleteAll/`);
  }

  search(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.serverUrl}/tutorials/search?title=${title}`);
  }
}
