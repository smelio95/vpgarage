// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    const loginData = {email, password};
    
    return this.http.post<boolean>(`${this.apiUrl}/login`, loginData);
  }

  logout() {
    this.isLoggedIn = false;
  }

}
