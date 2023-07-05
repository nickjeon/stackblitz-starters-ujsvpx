import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <app-products></app-products>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
