import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getAllProducts: any;
  getAllCategories: any;
  getProductsByCategory: any;

  constructor() { }
}
