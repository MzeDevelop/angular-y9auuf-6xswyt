import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
getProducts() {
    return this.http.get<{ id: number; name: string; price: number; availableCount: number;
    description: string; produced: string; manufacturedImage: string; image: string; rabatt: boolean; used: boolean}[]>(
      '/assets/produkte.json'
    );
  }
}