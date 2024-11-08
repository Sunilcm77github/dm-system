import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userUpdated = new Subject<void>();
  constructor(private http: HttpClient) {}

  loadUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/user/', {
      withCredentials: true,
    });
  }

  createUser(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/v1/user/create', data);
  }

  loadDepartment(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/department/get', {
      withCredentials: true,
    });
  }

  loadRole(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/role/', {
      withCredentials: true,
    });
  }

  getUusersUpdatedListner() {
    return this.userUpdated.asObservable();
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/v1/user/${id}`);
  }
}
