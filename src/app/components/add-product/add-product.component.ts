import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';

  constructor(private http: HttpClient) { }

  async handleSubmit() {
    try {
      await this.http.post('https://csi-26-atividade7-server.onrender.com/products', { name: this.productName }).toPromise();
      this.productName = '';
      alert('Product added successfully!');
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }
}
