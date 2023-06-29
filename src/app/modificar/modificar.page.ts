import { Component, OnInit } from '@angular/core';
class Product {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products: Product[] = [
    new Product(1, 'Product 1', 'This is product 1.'),
    new Product(2, 'Product 2', 'This is product 2.'),
    new Product(3, 'Product 3', 'This is product 3.')
  ];

  editingProduct: Product | null = null;

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  editProduct(product: Product) {
    this.editingProduct = product;
  }

  saveProduct() {
    if (this.editingProduct) {
      const index = this.products.findIndex(p => p.id === this.editingProduct!.id);
      if (index !== -1) {
        this.products[index] = { ...this.editingProduct };
        this.editingProduct = null;
      }
    }
  }

  cancelEditing() {
    this.editingProduct = null;
  }
}

