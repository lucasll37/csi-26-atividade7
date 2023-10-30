import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'https://csi-26-atividade7-server.onrender.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiURL}/products`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiURL}/products`, product);
  }
}
