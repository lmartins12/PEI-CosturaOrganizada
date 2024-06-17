import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {
  private apiUrl = 'http://localhost:8080/api/encomendas';

  constructor(private http: HttpClient) {}

  getEncomendas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEncomenda(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEncomenda(encomenda: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, encomenda);
  }

  updateEncomenda(encomenda: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${encomenda.id}`, encomenda);
  }

  deleteEncomenda(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
