import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://csi-26-atividade7-server.onrender.com/products').subscribe(data => {
      this.products = data as any[];
    }, error => {
      console.error("Error fetching products:", error);
    });
  }
}
