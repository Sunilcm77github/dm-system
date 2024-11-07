import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  loadDepartment(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/role/', {
      withCredentials: true,
    });
  }

  createDepartment(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/v1/role/create', data);
  }
}
