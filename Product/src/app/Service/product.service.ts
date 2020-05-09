import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Url = 'http://localhost:8888/api/products/'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.Url);
  }

  add(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.Url, product);
  }

  findById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.Url + id)
  }

  edit(product: IProduct, id: number): Observable<IProduct> {
    return this.http.put<IProduct>(this.Url + id, product)
  }

  delete(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(this.Url + id)
  }

}
