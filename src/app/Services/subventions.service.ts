import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubventionsService {
  private apiUrl = 'http://localhost:8000/api/subventions/';

  constructor(private http: HttpClient) { }

  getSubventions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createSubvention(subvention: any): Observable<any> {
    return this.http.post(this.apiUrl, subvention);
  }
}
