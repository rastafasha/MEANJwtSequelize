import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tag} from '../models/tag.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TagService {
  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tag> {
    return this.http.get(`${this.serverUrl}/tag/findAll`);
  }
  getAllWithTutorial(): Observable<Tag> {
    return this.http.get(`${this.serverUrl}/tag/findAllTutorials`);
  }

  get(id: any): Observable<Tag> {
    return this.http.get(`${this.serverUrl}/tag/findById/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/tag/create`, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.serverUrl}/tag/update/${id}`, data);
  }

  addTutorial(data: any, tutorialId): Observable<any> {
    return this.http.post(`${this.serverUrl}/tag/addTutorial/`, data, tutorialId);
  }



}
